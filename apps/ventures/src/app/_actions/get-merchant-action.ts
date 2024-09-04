'use server';

import { Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';

import { CLOUD_MERCHANT_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getMerchantAction = async () => {
  const res = await serverInstance.get<BaseResponse<Merchant>>(CLOUD_MERCHANT_GET_ENDPOINT);

  return res.data;
};
