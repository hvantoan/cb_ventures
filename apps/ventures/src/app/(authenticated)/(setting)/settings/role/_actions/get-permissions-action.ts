'use server';

import { CLOUD_ROLE_PERMISSIONS_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { Permission } from '../_models/permission';

export const getPermissionsAction = async () => {
  const res = await serverInstance.get<BaseResponse<BaseListData<Permission>>>(CLOUD_ROLE_PERMISSIONS_ENDPOINT);

  return res.data;
};
