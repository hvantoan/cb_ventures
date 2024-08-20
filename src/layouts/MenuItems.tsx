import {
  UilEllipsisV,
  UilCreateDashboard
} from '@iconscout/react-unicons';
import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/redux';


function MenuItems() {
  const path = '/admin';
  const { t } = useTranslation();
  const { topMenu } = useAppSelector((state) => {
    return {
      topMenu: state.layout.topMenu,
    };
  });

  const pathname = usePathname();

  const pathArray = pathname && pathname !== '/' ? pathname.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath?.split('/') ?? "";

  const [openKeys, setOpenKeys] = React.useState<any>(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );
  const [openItems, setOpenItems] = React.useState(
    !topMenu ? [`${mainPathSplit.length === 1 ? 'demo-1' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`,] : []
  );

  useEffect(() => {
    if (pathname === path) {
      setOpenKeys(['dashboard']); // active menu key.
      setOpenItems(['demo-1']); // active menu item.
    }
  }, [pathname]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' && keys.length > 0 ? [keys[keys.length - 1]] : keys);
  };

  const onClick = (item: any) => {
    setOpenItems([item.key])
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
    getItem(t('dashboard'), 'dashboard', !topMenu && <UilCreateDashboard />, null),
  ];

  return (
    <Menu
      onClick={onClick}
      onOpenChange={onOpenChange}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
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
