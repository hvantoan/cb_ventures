import type {} from '@mui/lab';
import type { Palette } from '@mui/material';
import { CssVarsTheme } from '@mui/material/styles';
import type { CssVarsPalette } from '@mui/material/styles/experimental_extendTheme';
import { UseMediaQueryOptions } from '@mui/material/useMediaQuery/useMediaQuery';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';

declare module '@mui/material/styles/experimental_extendTheme' {
  export interface CustomShadow {
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    card: string;
    dropdown: string;
    dialog: string;
    primary: string;
    info: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  }
  export interface CssVarsThemeOptions {
    customShadows: CustomShadow;
  }

  export interface CssVarsTheme {
    customShadows: CustomShadow;
    palette: CssVarsPalette & Palette;
  }

  export interface ThemeVars {
    customShadows: CustomShadow;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    soft: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    transparent: true;
  }
}

declare module '@mui/material/Pagination' {
  export interface PaginationPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
  }
  export interface PaginationPropsVariantOverrides {
    soft: true;
  }
}

declare module '@emotion/react' {
  export interface Theme extends CssVarsTheme {}
}

declare module '@mui/material/useMediaQuery' {
  export default function useMediaQuery<Theme = CssVarsTheme>(
    queryInput: string | ((theme: Theme) => string),
    options?: UseMediaQueryOptions
  ): boolean;
}

declare module '@mui/material/styles/createTheme' {
  export interface Theme extends BaseTheme, CssVarsTheme {
    components?: Components<BaseTheme>;
    unstable_sx: (props: SxProps<Theme>) => CSSObject;
    unstable_sxConfig: SxConfig;
  }
}
