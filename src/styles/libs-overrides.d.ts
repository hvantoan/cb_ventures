import 'next-auth';
import type { Awaitable, RequestInternal } from 'next-auth';
import type { CommonProviderOptions, CredentialInput } from 'next-auth/providers';

declare module 'next-auth' {
  export interface User extends BaseResponse<LoginDto> {
    id: string;
    email: string;
    name: string;
    image: string;
    roles: string[];
  }
  export interface CredentialsConfig<C extends Record<string, CredentialInput> = Record<string, CredentialInput>>
    extends CommonProviderOptions {
    type: 'credentials';
    credentials: C;
    authorize: (
      credentials: Record<keyof C, string> | undefined,
      req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
    ) => Awaitable<BaseResponse<LoginDto> | null>;
  }
  export interface Session {
    user: LoginUser;
    token: string;
    refreshToken: string;
    expiredTime: number;
  }
}

declare module 'next-auth/jwt' {
  export interface DefaultJWT {
    token: string;
    refreshToken: string;
    user: LoginUser;
    expiredTime: number;
  }
}