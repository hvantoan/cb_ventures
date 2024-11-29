'use client';

import DefaultLogo from '@hvantoan/ui/assets/images/default-logo.png';
import Image from 'next/image';
import Link from 'next/link';

import { SidebarLogoBox } from './sidebar.styles';

const SidebarLogo: React.FC = () => {
  return (
    <SidebarLogoBox>
      <Link href='/'>
        <Image alt='logo' src={DefaultLogo} className='h-7 w-auto' priority />
      </Link>
    </SidebarLogoBox>
  );
};

export default SidebarLogo;
