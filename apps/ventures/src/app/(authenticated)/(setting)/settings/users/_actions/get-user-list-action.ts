'use server';

import { User } from '@modules/(setting)/settings/users/_models/user';

import { CLOUD_USER_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const getUserListAction = async (filter: BaseListRequest) => {
  const res = await serverInstance.post<BaseResponse<BaseListData<User>>>(CLOUD_USER_LIST_ENDPOINT, filter);

  return res.data;
};
