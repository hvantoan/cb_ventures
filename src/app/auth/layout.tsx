"use client";
import { AdminLayout } from "@/layouts/AdminLayout";
import Providers from "../providers";
import ThemeRegistry from "@/config/theme/ThemeRegistry";

const HomeLayout: React.FC<WrappedComponentProps> = ({ children }) => {
  return (
    <Providers>
      <ThemeRegistry>{children}</ThemeRegistry>
    </Providers>
  );
};
export default HomeLayout;
