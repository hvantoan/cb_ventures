"use client";
import { Layout } from "antd";
import MenuItems from "../MenuItems";
import { useAppSelector } from "@/redux";
import { useEffect, useState } from "react";
const { Sider } = Layout;

const Sidebar = () => {
  const { topMenu, menuCollapse } = useAppSelector((state) => state.layout);
  const [innerWidth, setInnerWidth] = useState(1920);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <>
      {!topMenu || innerWidth < 1200 ? (
        <Sider
          width={menuCollapse ? 80 : 220}
          collapsed={menuCollapse}
          className={`scrollbar fixed z-998 h-[100vh] overflow-y-auto bg-white py-5 pb-[74px] shadow-[0_0_20px_rgba(160,160,160,0.02)] duration-[300ms] dark:bg-[#1b1d2a] [&.ant-layout-sider-collapsed]:xl:-ms-20`}
        >
          <MenuItems />
        </Sider>
      ) : null}
    </>
  );
};

export default Sidebar;
