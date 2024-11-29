import { css } from '@emotion/react';

export const autoHideScrollbarStyle = css`
  scrollbar-color: transparent transparent;
  &:not(:hover) {
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
