'use client';

import { IconButton, useMediaQuery } from '@mui/material';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import SidebarLogo from '@/app/(authenticated)/_components/sidebar/sidebar-logo';
import { useInitContext } from '@/app/(authenticated)/_context/init-context';
import { Navigation, NavigationWithRole } from '@/components/navigation';
import { SIDEBAR_COLLAPSED } from '@/components/navigation/navigation.constants';
import { clientInstance } from '@/query/client-instance';
import { INTERNAL_CONFIG_PERSIST_SIDEBAR_STATE_ENDPOINT } from '@/query/internal-endpoints';
import { contactPath, homePath, pricingPath, roadmapPath } from '@/routes';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeSidebar, openSidebar, toggleSidebar } from '@/store/reducers/general';

import { NavigationBox, StyledDrawer } from './sidebar.styles';

interface SidebarProps {
  navItems: Array<NavigationWithRole>;
  initState?: boolean;
}

export const noSidebarPaths = [homePath, pricingPath, contactPath, roadmapPath];

const Sidebar: React.FC<SidebarProps> = ({ initState, navItems }) => {
  const pathname = usePathname();
  const collapsed = useAppSelector((state) =>
    state.general.sidebar.expanded === undefined ? initState : !state.general.sidebar.expanded
  );
  const dispatch = useAppDispatch();
  const { isMobile: isFromMobile } = useInitContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'), { defaultMatches: isFromMobile });

  const toggle = useCallback(async () => {
    dispatch(toggleSidebar());
    await clientInstance.put(INTERNAL_CONFIG_PERSIST_SIDEBAR_STATE_ENDPOINT, { expended: !collapsed });
  }, [collapsed]);

  const [noSidebar, setNoSidebar] = useState(false);

  useEffect(() => {
    setNoSidebar(noSidebarPaths.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    if (initState || noSidebar) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  }, [initState, noSidebar]);

  return (
    <StyledDrawer
      variant={isMobile || noSidebar ? 'temporary' : 'permanent'}
      open={!collapsed}
      className={clsx({ [SIDEBAR_COLLAPSED]: collapsed })}
      onClose={toggle}
    >
      <IconButton
        onClick={toggle}
        size='small'
        className={clsx(
          'border-grey-400 bg-background-default !absolute -right-[13px] z-[3000] border border-dashed bg-blend-color',
          {
            'rotate-180': !collapsed
          },
          'hover:bg-background-default top-8 hidden transition-transform duration-300 md:flex'
        )}
      >
        <span className='i-eva-arrow-ios-forward-fill h-4 w-4' />
      </IconButton>
      <SidebarLogo />
      <NavigationBox>
        {navItems.map((navItem) => (
          <Navigation key={navItem.path} navInfo={navItem} />
        ))}
      </NavigationBox>
    </StyledDrawer>
  );
};

export default Sidebar;
