"use client";
import { Suspense, useEffect } from "react";
import Loading from "../loading";
import { useAppSelector } from "@/redux";

const HomeLayout: React.FC<WrappedComponentProps> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
export default HomeLayout;
