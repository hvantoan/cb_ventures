'use client';

import { Box } from '@mui/material';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { useHandleLinkClick } from '@/components/navigation/use-handle-link-click';
import { useAppSelector } from '@/store';

import { NavItem } from '../nav-item';
import { NAME_CLASS } from '../navigation.constants';

interface SingleNavProps {
  navInfo: NavigationInfo;
}

const SingleNav: React.FC<SingleNavProps> = ({ navInfo }) => {
  const pathName = usePathname();
  const sidebarExpanded = useAppSelector((state) => Boolean(state.general.sidebar.expanded));

  const isActive = useMemo(() => pathName === `/${navInfo.path}` || pathName === navInfo.path, [pathName]);

  const handleClick = useHandleLinkClick();

  return (
    <Link href={`/${navInfo.path}`} onClick={handleClick}>
      <NavItem selected={isActive}>
        <span className={clsx(navInfo?.icon, 'min-h-6 min-w-6', { 'mr-2': sidebarExpanded })} />
        <Box minWidth={0} className={clsx(NAME_CLASS, { 'mt-1': !sidebarExpanded })} whiteSpace='nowrap'>
          {sidebarExpanded ? navInfo.name : (navInfo.shortName ?? navInfo.name)}
        </Box>
      </NavItem>
    </Link>
  );
};

export default SingleNav;
