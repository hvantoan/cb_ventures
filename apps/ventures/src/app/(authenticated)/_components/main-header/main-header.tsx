'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT
} from '@/app/(authenticated)/_components/main-header/main-header.constants';

import { noSidebarPaths } from '../sidebar/sidebar';
import { StyledAppBar, StyledToolbar } from './main-header.styles';
import MenuToggler from './menu-toggler';
import UserMenu from './user-menu';

const MainHeader: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const [isFullWidth, setIsFullWidth] = useState(false);
  useEffect(() => {
    setIsFullWidth(noSidebarPaths.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    function changeHeight() {
      if (window.innerWidth < 720) {
        ref.current!.style.height = `${MOBILE_HEADER_HEIGHT}px`;
        return;
      }
      if (window.scrollY > 20) {
        ref.current!.style.height = `${MOBILE_HEADER_HEIGHT}px`;
      } else {
        ref.current!.style.height = `${DESKTOP_HEADER_HEIGHT}px`;
      }
    }
    document.addEventListener('scroll', changeHeight);
    return () => {
      document.removeEventListener('scroll', changeHeight);
    };
  }, []);

  return (
    <StyledAppBar data-fullwidth={isFullWidth}>
      <StyledToolbar ref={ref}>
        <div>
          <MenuToggler />
        </div>
        <div>
          <UserMenu />
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainHeader;
