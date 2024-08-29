import { type GetServerSidePropsContext } from "next";
import {
  Awaitable,
  getServerSession,
  RequestInternal,
  type NextAuthOptions,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { env } from "@/env";
import {
  CommonProviderOptions,
  CredentialInput,
} from "next-auth/providers/index";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { LOGIN_ENDPOINT, LOGIN_GOOGLE_ENDPOINT } from "./endpoint";
import { API_ENDPOINT } from "@/config/api/axiosClient";
import axios from "axios";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  export interface Session {
    user: LoginUser;
    token: string;
    refreshToken: string;
    expiredTime: number;
  }
  export interface User extends BaseResponse<LoginDto> {
    id: string;
    email?: string;
    name?: string;
    image?: string;
    roles?: string[];
  }
  export interface CredentialsConfig<
    C extends Record<string, CredentialInput> = Record<string, CredentialInput>,
  > extends CommonProviderOptions {
    type: "credentials";
    credentials: C;
    authorize: (
      credentials: Record<keyof C, string> | undefined,
      req: Pick<RequestInternal, "body" | "query" | "headers" | "method">,
    ) => Awaitable<BaseResponse<LoginDto> | null>;
  }
}

declare module "next-auth/jwt" {
  export interface DefaultJWT {
    token: string;
    refreshToken: string;
    user: LoginUser;
    expiredTime: number;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === "google") {
        // Set google config
        const config = {
          baseURL: API_ENDPOINT,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${account.id_token}`,
          },
        };

        // Check accout and register if not exist
        const res = await axios.post<BaseResponse<LoginDto>>(
          LOGIN_GOOGLE_ENDPOINT,
          user,
          config,
        );
        return res && res.status === 200 && res.data.success;
      }

      if (account && account.provider === "discord") {
        return true;
      }

      return false;
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Basic Auth",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        console.log(credentials);
        try {
          const res = await axios.post<BaseResponse<LoginDto> & { id: string }>(
            LOGIN_ENDPOINT,
            credentials,
            {
              baseURL: process.env.API_URL,
            },
          );

          return res.data;
        } catch {
          return null;
        }
      },
    }),
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
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
