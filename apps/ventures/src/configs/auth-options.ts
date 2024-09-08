import axios from 'axios';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { CLOUD_LOGIN_ENDPOINT } from '@/query/cloud-endpoints';

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
          const merchantCode = 'ventures';
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
    })
  ],
  callbacks: {
    signIn: async ({ user }) => {
      if (user.success) {
        return true;
      }
      throw new Error(user?.message);
    },
    jwt: async ({ user, trigger, token }) => {
      if (user && trigger === 'signIn') {
        token.token = user.data.token;
        token.refreshToken = user.data.refreshToken;
        token.expiredTime = user.data?.expiredTime;
        token.user = {
          name: user.data.name,
          merchantCode: user.data.merchantCode,
          merchantName: user.data.merchantName
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
