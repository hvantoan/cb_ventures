import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

import { customShadows, shadows } from '../constants/shadows';
import { colorSchemes } from './color-schemes';
import * as components from './components';
import { typography } from './typography';

export const theme = extendTheme({
  colorSchemes,
  typography,
  customShadows,
  shadows,
  components,
  shape: {
    borderRadius: 8
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
});
