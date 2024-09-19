import axios from 'axios';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { CLOUD_LOGIN_ENDPOINT, CLOUD_LOGIN_GOOGLE_ENDPOINT } from '@/query/cloud-endpoints';

const merchantCode = 'ventures';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/ventures/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Basic Auth',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          const payload = {
            ...credentials,
            merchantCode,
            permission: 1
          };

          const res = await axios.post<BaseResponse<LoginDto> & { id: string }>(CLOUD_LOGIN_ENDPOINT, payload, {
            baseURL: process.env.API_URL
          });

          return res.data;
        } catch {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === 'google') {
        if (account.access_token) {
          return true;
        }
        return false;
      }

      if (user.success) {
        return true;
      }
      throw new Error(user?.message);
    },
    jwt: async ({ user, trigger, token, account }) => {
      if (account?.provider === 'google') {
        const axiosConfig = {
          baseURL: process.env.API_URL,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${account.id_token}`
          }
        };

        // Call the API with the username
        const response = await axios.post<BaseResponse<LoginDto>>(
          CLOUD_LOGIN_GOOGLE_ENDPOINT,
          { ...user, merchantCode },
          axiosConfig
        );

        const googleUser = response.data;
        if (response.data.success && response.data && trigger === 'signIn') {
          token.token = googleUser.data.token;
          token.refreshToken = googleUser.data.refreshToken;
          token.expiredTime = googleUser.data?.expiredTime;
          token.user = {
            name: googleUser.data.name,
            merchantCode: googleUser.data.merchantCode,
            merchantName: googleUser.data.merchantName,
            avatar: googleUser.data.avatar
          };
        }
      } else if (user && trigger === 'signIn') {
        token.token = user.data.token;
        token.refreshToken = user.data.refreshToken;
        token.expiredTime = user.data?.expiredTime;
        token.user = {
          name: user.data.name,
          merchantCode: user.data.merchantCode,
          merchantName: user.data.merchantName,
          avatar: user.data.avatar
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
    redirect: async ({ url }) => {
      return url;
    }
  },
  session: {
    maxAge: 86300
  },
  cookies: {}
};
