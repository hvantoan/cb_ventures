import Overlay from '@fumy/ui/assets/images/overlay-2.png';
import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)`
  height: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat,
    url(${Overlay.src});
  background-position: center center;
  flex-grow: 1;
`;
