'use server';

import { CLOUD_USER_REQUEST_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { UserRequest } from '../_models/user-request';

export const getUserRequestsAction = async (filter: BaseListRequest) => {
  const res = await serverInstance.post<BaseResponse<BaseListData<UserRequest>>>(
    CLOUD_USER_REQUEST_LIST_ENDPOINT,
    filter
  );

  return res.data;
};
