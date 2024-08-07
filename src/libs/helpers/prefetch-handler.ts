import { AxiosError, type AxiosResponse } from 'axios';
import { permanentRedirect } from 'next/navigation';

import { loginPath } from '@/routes';

export const prefetchHandler = (handler: () => Promise<AxiosResponse>) => {
  return async () => {
    try {
      const res = await handler();

      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError?.status === 401) {
        return permanentRedirect(loginPath);
      }

      return Promise.reject(error);
    }
  };
};
