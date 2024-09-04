'use server';

import { Role } from '@modules/(setting)/settings/role/_models/role';

import { CLOUD_ROLE_ALL_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getAllRolesAction = async () => {
  const res = await serverInstance.get<BaseResponse<BaseListData<Role>>>(CLOUD_ROLE_ALL_ENDPOINT);

  return res.data;
};
