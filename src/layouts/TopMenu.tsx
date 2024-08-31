'use client';
import { contactPath, homePath, pricingPath } from '@/routes';
import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

function TopMenu() {
  const pathname = usePathname();
  const route = useRouter();

  const items: MenuItemType[] = [
    {
      label: 'Trang chủ',
      key: homePath,
    },
    // {
    //   label: "Roadmap",
    //   key: "/roadmap",
    // },
    {
      label: 'Giá cả',
      key: pricingPath,
    },
    {
      label: 'Liên hệ',
      key: contactPath,
    },
  ];

  return (
    <Menu
      className="bg-transparent flex-1"
      mode="horizontal"
      items={items}
      defaultSelectedKeys={['home']}
      selectedKeys={[pathname]}
      theme="dark"
      color="white"
      onClick={(item) => {
        route.push(item.key);
      }}
    />
  );
}

export default TopMenu;
