import { UilEllipsisV, UilCreateDashboard, UilCommentAltMedical } from '@iconscout/react-unicons';
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux';
import { contactPath, contactsPath, dashboardPath, settingPath } from '@/routes';

function MenuItems() {
  const path = '/manage';
  const pathname = usePathname();
  const route = useRouter();
  const { topMenu } = useAppSelector((state) => state.layout);

  const pathArray = pathname && pathname !== '/' ? pathname.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath?.split('/') ?? '';

  const [innerWidth, setInnerWidth] = useState(1920);
  const [openKeys, setOpenKeys] = useState<any>(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );
  const [openItems, setOpenItems] = useState(
    !topMenu
      ? [`${mainPathSplit.length === 1 ? 'demo-1' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`]
      : [],
  );

  useEffect(() => {
    if (pathname === path) {
      setOpenKeys(pathname.split('/')); // active menu key.
    }
  }, [pathname]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' && keys.length > 0 ? [keys[keys.length - 1]] : keys);
  };

  const onClick = (item: any) => {
    setOpenItems([item.key]);
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  function getItem(label: React.ReactNode, key: string, icon: any, children: any) {
    return {
      label,
      key,
      icon,
      children,
    };
  }

  const items = [
    getItem('Dashboard', dashboardPath, !topMenu && <UilCreateDashboard />, null),
    getItem('Liên hệ', contactsPath, !topMenu && <UilCommentAltMedical />, null),
  ];

  return (
    <Menu
      onClick={(o) => onClick(o)}
      onOpenChange={onOpenChange}
      mode={!topMenu || innerWidth <= 991 ? 'inline' : 'horizontal'}
      defaultSelectedKeys={openKeys}
      defaultOpenKeys={openItems}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      selectedKeys={openItems}
      items={items}
    />
  );
}

export default MenuItems;
