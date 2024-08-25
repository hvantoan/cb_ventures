'use client';
import { StoreProvider } from "@/components/StoreProvider";
import config from "@/config/config";
import { store } from "@/redux/store";
import { basePath } from "@/routes";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from 'antd';

const theme = config

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
        <ConfigProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </SessionProvider>
      <Init />
    </StoreProvider>

  );
};

export default Providers;
