'use server';

import { CLOUD_USER_REQUEST_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { UserRequest } from '../_models/user-request';

export const getUserRequestAction = async (id: string) => {
  const res = await serverInstance.post<BaseResponse<UserRequest>>(CLOUD_USER_REQUEST_GET_ENDPOINT, { id });

  return res.data;
};
