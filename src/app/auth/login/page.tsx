"use client";
import { Suspense } from "react";
import SignIn from "../_components/SignIn";

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  );
};
export default LoginPage;
