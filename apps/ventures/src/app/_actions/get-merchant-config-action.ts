'use server';

import { cookies } from 'next/headers';

import { GLOBAL_CONFIG_COOKIES_NAME } from '@/constants';
import { GlobalConfig } from '@/models/global-config';
import { CLOUD_GLOBAL_SETTING_MERCHANT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getMerchantConfigAction = async (): Promise<GlobalConfig> => {
  const globalConfigCookie = cookies().get(GLOBAL_CONFIG_COOKIES_NAME);
  if (globalConfigCookie) {
    return JSON.parse(globalConfigCookie.value);
  }

  const res = await serverInstance.get<GlobalConfig>(CLOUD_GLOBAL_SETTING_MERCHANT_ENDPOINT);

  return res.data;
};
