"use client";
import { StoreProvider } from "@/components/StoreProvider";
import config from "@/config/config";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";

const theme = config;

const Init = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return null;
};

const originalConsoleError = console.error;
console.error = (message, ...args) => {
  if (
    typeof message === "string" &&
    (message.includes("defaultProps will be removed") ||
      message.includes("Extra attributes from the server"))
  ) {
    return;
  }
  originalConsoleError.apply(console, [message, ...args]);
};

const Providers: React.FC<WrappedComponentProps> = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <SessionProvider basePath={`/api/auth`}>
        <ConfigProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ConfigProvider>
      </SessionProvider>
      <Init />
    </StoreProvider>
  );
};

export default Providers;
