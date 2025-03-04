'use client';

import { Avatar, Button, Container, Stack, Typography } from '@mui/material';
import type { Session } from 'next-auth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT
} from '@/app/(authenticated)/_components/main-header/main-header.constants';
import { homePath, loginPath, pricingPath, roadmapPath, wePath } from '@/routes';

import { StyledLandingAppBar, StyledLandingToolbar } from './landing-header.styles';
import MenuToggler from './menu-toggler';
import UserMenu from './user-menu';

interface Props {
  session: Session;
}

const LandingHeader: React.FC<Props> = ({ session }) => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  const navItems = [
    {
      label: 'Trang chủ',
      href: homePath
    },
    {
      label: 'Giá',
      href: pricingPath
    },
    {
      label: 'Kế hoạch',
      href: roadmapPath
    },
    {
      label: 'Liên hệ',
      href: wePath
    }
  ];

  return (
    <StyledLandingAppBar className='backdrop-blur-2xlxl bg-transparent shadow-2xl'>
      <Container>
        <StyledLandingToolbar ref={ref}>
          <Stack direction='row' spacing={2} className='h-full' alignItems='center'>
            <Avatar alt='Home' src='/ventures/img/logo_vertical.png' className='h-6 w-6 bg-white' />
            <MenuToggler />
            {Boolean(typeof window !== 'undefined' && window.innerWidth > 720) && (
              <Stack direction='row'>
                {navItems.map((nav, idx) => {
                  return (
                    <Button
                      variant='text'
                      color='primary'
                      key={idx}
                      onClick={() => router.push(nav.href)}
                      className={`${pathname === nav.href ? 'text-h_primary' : 'text-white'} text-13`}
                    >
                      {nav.label}
                    </Button>
                  );
                })}
              </Stack>
            )}
          </Stack>
          {session?.user ? (
            <div>
              <UserMenu />
            </div>
          ) : (
            <Button color='primary' onClick={() => router.push(loginPath)}>
              <Typography variant='subtitle1'>Đăng nhập</Typography>
            </Button>
          )}
        </StyledLandingToolbar>
      </Container>
    </StyledLandingAppBar>
  );
};

export default LandingHeader;
