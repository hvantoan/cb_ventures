'use client';

import { useToggle } from '@hvantoan/utilities/hooks';
import { Collapse } from '@mui/material';
import React, { useLayoutEffect, useRef } from 'react';

import GroupNavMenu from '@/components/navigation/group-nav/group-nav-menu';
import { useAppSelector } from '@/store';

import { SubNavItem } from '../sub-nav-item';
import GroupNavToggle from './group-nav-toggle';

interface GroupNavProps {
  navInfo: NavigationInfo;
}

const GroupNav: React.FC<GroupNavProps> = ({ navInfo }) => {
  const { isOpen: expanded, toggle, handleOpen, handleClose } = useToggle();
  const sidebarExpanded = useAppSelector((state) => state.general.sidebar.expanded);
  const anchorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sidebarExpanded) {
      handleClose();
    }
  }, [sidebarExpanded]);

  return (
    <>
      <GroupNavToggle
        toggle={toggle}
        handleOpen={handleOpen}
        handleClose={handleClose}
        expanded={expanded}
        navInfo={navInfo}
        sidebarExpanded={Boolean(sidebarExpanded)}
        ref={anchorRef}
      />
      <Collapse in={expanded && sidebarExpanded} timeout='auto' unmountOnExit>
        {navInfo.children?.map((child) => <SubNavItem key={child.path} path={child.path} text={child.name} />)}
      </Collapse>
      <GroupNavMenu
        navInfos={navInfo?.children}
        preOpen={expanded && !sidebarExpanded}
        anchorEl={anchorRef?.current}
        closeMenu={handleClose}
      />
    </>
  );
};

export default GroupNav;
