'use client';

import { QueryProvider, StoreProvider, ToastContainer } from '@fumy/ui/components';
import { MountPoint } from '@fumy/ui/helpers';
import { ThemeRegistry } from '@fumy/ui/theme';
import { NoSsr } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Chart, Colors } from 'chart.js';
import 'dayjs/locale/vi';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import 'reflect-metadata';

import { ApiLoading } from '@/components/global-loading';
import { basePath } from '@/routes';
import { store } from '@/store';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
Chart.register(Colors);

const Init = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return null;
};

const Providers: React.FC<WrappedComponentProps> = ({ children }) => {
  return (
    <ThemeRegistry>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='vi'>
        <QueryProvider>
          <StoreProvider store={store}>
            <SessionProvider basePath={`${basePath}/api/auth`}>
              <MountPoint />
              {children}
            </SessionProvider>
            <NoSsr>
              <ApiLoading />
            </NoSsr>
            <Init />
          </StoreProvider>
        </QueryProvider>
        <ToastContainer autoClose={4000} hideProgressBar limit={5} />
      </LocalizationProvider>
    </ThemeRegistry>
  );
};

export default Providers;
