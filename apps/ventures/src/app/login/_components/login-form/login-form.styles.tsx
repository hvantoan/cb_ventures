'use client';

import Overlay from '@fumy/ui/assets/images/overlay-4.png';
import { styled } from '@mui/material';

export const FormBox = styled('div')`
  margin: 0 auto;
  height: fit-content;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${({ theme }) => theme.spacing(4, 2)};
    background-color: #fff;
    border-radius: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(10, 2, 0)};
  }

  &::before {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${Overlay.src});
    opacity: 0.24;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(15, 2)};
    max-width: 480px;
    &::before {
      display: none;
      content: none;
    }
    padding-top: ${({ theme }) => theme.spacing(24)};
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
  }
`;
