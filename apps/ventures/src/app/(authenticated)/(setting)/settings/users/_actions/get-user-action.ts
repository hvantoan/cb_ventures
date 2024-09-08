'use server';

import { CLOUD_USER_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { User } from '../_models/user';

export const getUserAction = async (id: string) => {
  const res = await serverInstance.post<BaseResponse<User>>(CLOUD_USER_GET_ENDPOINT, { id });

  return res.data;
};
