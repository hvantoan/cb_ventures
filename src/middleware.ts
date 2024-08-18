import dayjs from "dayjs";
import { decodeJwt } from "jose";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { routeRoleMapping } from "@/route-role-mapping";
import { ROLE_KEY } from "@/app/(authenticated)/constants";

const middleware = withAuth(
  async (request) => {
    const { pathname } = request.nextUrl;
    if (request.nextUrl.pathname.startsWith("/api") || !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)) {
      return NextResponse.next();
    }

    const payload = decodeJwt(request.nextauth.token?.token as string);
    const roles = payload?.[ROLE_KEY] as Array<string>;
    const target = routeRoleMapping.find((route) =>
      request.nextUrl.pathname?.startsWith(route.route),
    );

    if (!target || (target && roles.includes(target.role))) {
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (token) {
          return dayjs().isBefore(dayjs(token.expiredTime));
        }
        return false;
      },
    },
    pages: {
      signIn: "/login",
    },
  },
);

export default middleware;

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|assets|img).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
