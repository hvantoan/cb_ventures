'use client';

import { MenuItemIcon } from '@hvantoan/ui/assets/icons';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';

import { useAppDispatch } from '@/store';
import { toggleSidebar } from '@/store/reducers/general';

const MenuToggler: React.FC = () => {
  const dispatch = useAppDispatch();

  const openMenu = useCallback(() => {
    dispatch(toggleSidebar());
  }, []);

  return (
    <IconButton size='small' className='flex md:hidden' onClick={openMenu}>
      <span className='h-6 w-6 grayscale'>
        <MenuItemIcon />
      </span>
    </IconButton>
  );
};

export default MenuToggler;
