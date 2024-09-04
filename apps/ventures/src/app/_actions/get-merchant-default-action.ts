'use server';

import { MerchantDefault } from '@/models/merchant-default';
import { CLOUD_MERCHANT_DEFAULT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getMerchantDefaultAction = async () => {
  const res = await serverInstance.post<BaseResponse<MerchantDefault>>(CLOUD_MERCHANT_DEFAULT_ENDPOINT, {});

  return res.data;
};
