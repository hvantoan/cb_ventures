'use server';

import { User } from '@modules/(setting)/settings/users/_models/user';

import { CLOUD_ME_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getMeAction = async () => {
  const res = await serverInstance.get<BaseResponse<User>>(CLOUD_ME_ENDPOINT);
  return res.data;
};
