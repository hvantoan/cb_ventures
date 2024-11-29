'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';

import { theme } from '../theme';

const ThemeRegistry: FC<WrappedComponentProps> = ({ children }) => (
  <AppRouterCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider>
);
export default ThemeRegistry;
