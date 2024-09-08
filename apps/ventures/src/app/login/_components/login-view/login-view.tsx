'use client';

import LoginIllustration from '@fumy/ui/assets/illustrations/illustration-login.png';
import { Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import { StyledStack } from './login-view.styles';

interface LoginViewProps {
  isFromMobile: boolean;
}

const TITLE = 'Chào mừng trở lại!';

const LoginView: React.FC<LoginViewProps> = ({ isFromMobile }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'), { defaultMatches: !isFromMobile });

  return (
    isDesktop && (
      <StyledStack direction='column' alignItems='center' justifyContent='center'>
        <Typography typography='h3'>{TITLE}</Typography>
        <Image
          src={LoginIllustration}
          alt='illustration-login'
          priority
          className='h-auto max-w-[480px] lg:max-w-[560px] xl:max-w-[720px]'
        />
      </StyledStack>
    )
  );
};

export default LoginView;
