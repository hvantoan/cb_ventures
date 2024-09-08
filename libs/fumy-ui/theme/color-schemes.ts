import type { ColorSystemOptions, SupportedColorScheme } from '@mui/material/styles';

import { background, error, grey, info, primary, secondary, success, text, warning } from '../constants/colors';

export const colorSchemes: Partial<Record<SupportedColorScheme, ColorSystemOptions>> = {
  light: {
    palette: {
      primary,
      secondary,
      success,
      warning,
      error,
      info,
      grey,
      text,
      background
    }
  }
};
