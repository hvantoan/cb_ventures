import axios, { type AxiosError } from 'axios';
import { signOut } from 'next-auth/react';

import { basePath, loginPath } from '@/routes';

export const clientInstance = axios.create({
  baseURL: `${basePath}/api`,
  withCredentials: true
});

clientInstance.interceptors.response.use(undefined, async (error: AxiosError) => {
  if (error?.response?.status === 401) {
    await signOut({ redirect: false, callbackUrl: `${basePath}${loginPath}` });
    window.location.replace(`${basePath}${loginPath}`);
  }

  return Promise.reject(error?.response);
});
