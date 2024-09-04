import { GENERAL_COOKIE_NAME } from '@modules/constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (req: NextRequest) => {
  const currentCookies = cookies();
  const payload = (await req.json()) as { expended: boolean };

  currentCookies.set({
    name: GENERAL_COOKIE_NAME,
    value: payload.expended.toString(),
    maxAge: 31536000,
    sameSite: 'lax'
  });
  return NextResponse.json('', { status: 200 });
};
