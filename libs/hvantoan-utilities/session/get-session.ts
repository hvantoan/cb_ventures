import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

const SESSION_SECRET = process.env.SESSION_SECRET || '';
const COOKIE_NAME = 'epos-customer-portal';

export const getSession = async <T extends Record<string, any> = Session>() => {
  const session = getIronSession<T>(cookies(), {
    password: SESSION_SECRET!,
    cookieName: COOKIE_NAME,
    ttl: 86400000,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    }
  });

  return session;
};
