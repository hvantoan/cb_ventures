'use server';

import { cookies } from 'next/headers';

import { GENERAL_COOKIE_NAME } from '@/app/(authenticated)/constants';

export const persistSidebar = async (value: boolean) => {
  const currentCookies = cookies();

  currentCookies.set({
    name: GENERAL_COOKIE_NAME,
    value: value.toString(),
    maxAge: 31536000,
    sameSite: 'lax'
  });
};
