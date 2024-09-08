'use client';

import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';

import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT
} from '@/app/(authenticated)/_components/main-header/main-header.constants';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from '@/app/(authenticated)/constants';
import { SIDEBAR_COLLAPSED } from '@/components/navigation/navigation.constants';

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  top: 0;
  transition: left 0.15s ${({ theme }) => theme.transitions.easing.sharp};

  & + main {
    margin-top: calc(${MOBILE_HEADER_HEIGHT}px + 2px);
  }
  right: 0;
  width: auto;
  left: auto;

  &[data-fullwidth='true'] {
    left: 0;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    left: ${SIDEBAR_WIDTH}px;

    &[data-fullwidth='true'] {
      left: 0;
    }

    .${SIDEBAR_COLLAPSED} ~ div.main > & {
      left: ${SIDEBAR_WIDTH_COLLAPSED}px;

      &[data-fullwidth='true'] {
        left: 0;
      }
    }

    & + main {
      margin-top: calc(${DESKTOP_HEADER_HEIGHT}px + 2px);
    }
  }
`;

export const StyledToolbar = styled(Toolbar)`
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
