"use client";
import { FC } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const ThemeRegistry: FC<WrappedComponentProps> = ({ children }) => (
  <AntdRegistry>{children}</AntdRegistry>
);
export default ThemeRegistry;
