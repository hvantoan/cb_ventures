'use client';

import { StoreProvider } from "@/libs/components/StoreProvider";
import { store } from "@/redux/store";
import { basePath } from "@/routes";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";



const Init = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return null;
};

const Providers: React.FC<WrappedComponentProps> = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <SessionProvider basePath={`${basePath}/api/auth`}>
        {children}
      </SessionProvider>
      <Init />
    </StoreProvider>
  );
};

export default Providers;
