'use client';

import { useToggle } from '@hvantoan/utilities/hooks';
import { Box, Grow, MenuList, Paper, Popper, PopperProps } from '@mui/material';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { useCallback } from 'react';

import GroupNavMenuItem from '@/components/navigation/group-nav/group-nav-menu-item';

interface GroupNavMenuProps {
  navInfos?: Array<NavigationInfo>;
  preOpen: boolean;
  anchorEl: PopperProps['anchorEl'];
  closeMenu: () => void;
}

const GroupNavMenu: React.FC<GroupNavMenuProps> = ({ anchorEl, navInfos, preOpen, closeMenu }) => {
  const { isOpen, handleOpen, handleClose } = useToggle();
  const segments = useSelectedLayoutSegments();

  const handleMenuClick = useCallback(() => {
    handleClose();
    closeMenu();
  }, []);

  return (
    <Popper
      open={preOpen || isOpen}
      anchorEl={anchorEl}
      role='menu'
      placement='right-start'
      transition
      onMouseOver={handleOpen}
      onMouseLeave={handleClose}
      className='z-[3000] hidden md:block'
      keepMounted={false}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          timeout={{
            enter: 250,
            exit: 0
          }}
        >
          <Box component={Paper}>
            <MenuList autoFocusItem={isOpen && preOpen}>
              {navInfos?.map((navInfo) => (
                <GroupNavMenuItem
                  key={navInfo.name}
                  component={Link}
                  href={`/${navInfo?.path}`}
                  selected={segments?.includes(navInfo?.path)}
                  onClick={handleMenuClick}
                  path={navInfo?.path}
                >
                  {navInfo.name}
                </GroupNavMenuItem>
              ))}
            </MenuList>
          </Box>
        </Grow>
      )}
    </Popper>
  );
};

export default GroupNavMenu;
