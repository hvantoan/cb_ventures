import dayjs from "dayjs";
import { type Session } from "next-auth";
import { redirect } from "next/navigation";

import { dashboardPath, loginPath } from "@/routes";
import { getSession } from "next-auth/react";

const LoginPage: React.FC = async () => {
  const session = (await getSession()) as Session;
  if (session?.token) {
    if (dayjs().isBefore(dayjs(session.expiredTime))) {
      return redirect(dashboardPath);
    }
  }
  return redirect(loginPath);
};

export default LoginPage;
