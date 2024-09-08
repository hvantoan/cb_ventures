'use client';

import styled from '@emotion/styled';
import { autoHideScrollbarStyle } from '@fumy/ui/styles';
import { Drawer } from '@mui/material';

import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT
} from '@/app/(authenticated)/_components/main-header/main-header.constants';
import { SIDEBAR_COLLAPSED } from '@/components/navigation/navigation.constants';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from '../../constants';

export const StyledDrawer = styled(Drawer)`
  width: ${SIDEBAR_WIDTH}px;

  .MuiDrawer-paper {
    position: fixed;
    top: 0;
    bottom: 0;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    .MuiDrawer-paper {
      overflow-y: visible;
      width: ${SIDEBAR_WIDTH}px;
      box-shadow: none;
      border-right: 1px dashed ${({ theme }) => theme.vars.palette.grey[400]};
      min-width: 0;
      transition: width 0.15s ${({ theme }) => theme.transitions.easing.sharp};
      height: 100%;
    }
    & + .main {
      width: calc(100vw - ${SIDEBAR_WIDTH}px - 8px);
    }

    &.${SIDEBAR_COLLAPSED} {
      width: ${SIDEBAR_WIDTH_COLLAPSED}px;
      & + .main {
        width: calc(100vw - ${SIDEBAR_WIDTH_COLLAPSED}px - 8px);
      }

      .MuiDrawer-paper {
        width: ${SIDEBAR_WIDTH_COLLAPSED}px;
      }
    }
  }
  height: 100%;
`;

export const SidebarLogoBox = styled('div')`
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing(2.5)};
  .${SIDEBAR_COLLAPSED} & {
    padding-left: 0;
    justify-content: center;
  }
`;

export const NavigationBox = styled('div')`
  overflow-y: scroll;
  padding: ${({ theme }) => theme.spacing(0, 0.5, 1, 1)};
  max-height: calc(100svh - ${MOBILE_HEADER_HEIGHT}px);
  ${({ theme }) => theme.breakpoints.up('md')} {
    max-height: calc(100svh - ${DESKTOP_HEADER_HEIGHT}px);
  }

  ${autoHideScrollbarStyle}
  &::-webkit-scrollbar {
    width: 4px;
  }

  .${SIDEBAR_COLLAPSED} & {
    padding: ${({ theme }) => theme.spacing(0, 0.25, 0.5, 0.75)};
  }
`;
