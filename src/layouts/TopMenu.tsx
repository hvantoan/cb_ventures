"use client";
import { Menu } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import { usePathname } from "next/navigation";
import React from "react";

function TopMenu() {
  const pathname = usePathname();

  console.log(pathname);

  const items: MenuItemType[] = [
    {
      label: "Trang chủ",
      key: "/",
    },
    {
      label: "Chúng tôi",
      key: "/about",
    },
  ];
  return (
    <Menu
      className="bg-transparent"
      mode="horizontal"
      items={items}
      defaultSelectedKeys={["/"]}
      theme="dark"
      color="white"
      onClick={(item) => {
        // if (item.keyPath.length === 1) setOpenKeys([]);
      }}
    />
  );
}

export default TopMenu;
