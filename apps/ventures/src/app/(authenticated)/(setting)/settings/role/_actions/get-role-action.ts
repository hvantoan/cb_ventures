'use server';

import { Role } from '@modules/(setting)/settings/role/_models/role';

import { CLOUD_ROLE_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getRoleAction = async (id: string) => {
  const res = await serverInstance.post<BaseResponse<Role>>(CLOUD_ROLE_GET_ENDPOINT, { id });

  return res.data;
};
