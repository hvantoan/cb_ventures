import { css } from '@emotion/react';

export const autoHideScrollbarStyle = css`
  &:not(:hover) {
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
