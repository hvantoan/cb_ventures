import { env } from "@/env";
import axios from "axios";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from 'next-auth/providers/credentials';
import { headers } from "next/headers";
import { AuthOptions, getServerSession } from "next-auth";
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login"
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Basic Auth',
    //   credentials: {
    //     username: { type: 'text' },
    //     password: { type: 'password' }
    //   },
    //   authorize: async (credentials) => {
    //     try {
    //       const reqHeaders = headers();
    //       const host = reqHeaders.get(HOST_KEY);
    //       const merchantCode = host?.split('.')[0] ?? '';
    //       const payload = {
    //         ...credentials,
    //         merchantCode,
    //         permission: 1
    //       };

    //       const res = await axios.post<BaseResponse<LoginDto> & { id: string }>(CLOUD_LOGIN_ENDPOINT, payload, {
    //         baseURL: process.env.API_URL
    //       });

    //       return res.data;
    //     } catch {
    //       return null;
    //     }
    //   }
    // })
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
