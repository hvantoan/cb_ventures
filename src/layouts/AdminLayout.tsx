"use client";
import { Layout } from "antd";
import HeaderTop from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useAppSelector } from "@/redux";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { topMenu, mode, rtlData, menuCollapse } = useAppSelector(
    (state) => state.layout,
  );

  if (typeof document === "undefined") {
    return <div />;
  }

  if (mode === "darkMode") {
    document.body.classList.add("dark");
  }

  if (rtlData) {
    const htmlElement: HTMLElement | null = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("dir", "rtl");
    }
  }

  return (
    <Layout className="bg-body_color">
      <HeaderTop />
      <Layout className="mt-[72px] flex flex-row gap-5">
        <Sidebar />
        <Content
          className={`max-w-full bg-body_color duration-[300ms] ${!topMenu ? `ease-[ease] xl:ps-0 ${menuCollapse ? "ps-[80px]" : "ps-[220px] delay-[150ms]"}` : ""}`}
        >
          {children}
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}
