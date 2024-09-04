'use client';

import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';

import { SIDEBAR_COLLAPSED } from '@/components/navigation/navigation.constants';

import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from './landing-header.constants';

export const StyledLandingAppBar = styled(AppBar)`
  position: fixed;
  top: 0;
  transition: left 0.15s ${({ theme }) => theme.transitions.easing.sharp};

  & + main {
    margin-top: calc(${MOBILE_HEADER_HEIGHT}px + 2px);
  }
  right: 0;
  width: auto;
  left: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    left: 0;
    .${SIDEBAR_COLLAPSED} ~ div.main > & {
      left: 0;
    }

    & + main {
      margin-top: calc(${DESKTOP_HEADER_HEIGHT}px + 2px);
    }
  }
`;

export const StyledLandingToolbar = styled(Toolbar)`
  transition: ${({ theme }) =>
    theme.transitions.create('height', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.sharp,
      delay: 0
    })};
  height: ${MOBILE_HEADER_HEIGHT}px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: ${DESKTOP_HEADER_HEIGHT}px;
  }
  display: flex;
  justify-content: space-between;
`;
