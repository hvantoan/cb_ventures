'use client';
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
            key: '/',
        },
        // {
        //   label: "Roadmap",
        //   key: "/roadmap",
        // },
        {
            label: 'Giá',
            key: '/pricing',
        },
        {
            label: 'Liên hệ',
            key: '/contact',
        },
    ];
    return (
        <Menu
            className="bg-transparent"
            mode="horizontal"
            items={items}
            defaultSelectedKeys={['/']}
            theme="dark"
            color="white"
            onClick={(item) => {
                console.log(item.key);
                route.push(item.key);
            }}
        />
    );
}

export default TopMenu;
