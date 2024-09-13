'use server';

import { CLOUD_USER_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { User } from '../_models/user';
import { SearchUserFilter } from '../_types/search-user-filter';

export const searchUserAction = async (filter: SearchUserFilter) => {
  const res = await serverInstance.post<BaseResponse<BaseListData<User>>>(CLOUD_USER_LIST_ENDPOINT, filter);
  return res.data.data.items;
};
