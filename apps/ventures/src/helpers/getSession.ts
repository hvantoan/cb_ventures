import { type CallbacksOptions, getServerSession } from 'next-auth';

import { authOptions } from '@/configs/auth-options';

const serverSessionCallback: CallbacksOptions['session'] = async ({ session, token }) => {
  session.user = token.user;
  session.token = token.token;
  session.refreshToken = token.refreshToken;
  session.expiredTime = token.expiredTime;
  return session;
};

const serverOptions = {
  ...authOptions,
  callbacks: {
    ...authOptions.callbacks,
    session: serverSessionCallback
  }
};

export const getSession = () => getServerSession(serverOptions);
