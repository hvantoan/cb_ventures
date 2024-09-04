import { getUserRequestsAction } from '@modules/(setting)/settings/request/_actions/get-user-requests-action';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { USER_REQUEST_QK } from '@/query/query-keys';

import { UserRequest } from '../_models/user-request';

const select = (input: BaseResponse<BaseListData<UserRequest>>): BaseListData<UserRequest> => {
  return {
    count: input?.data?.count,
    items: plainToInstance(UserRequest, input?.data?.items) ?? []
  };
};

export const useQueryUserRequests = (filter: BaseListRequest) => {
  return useQuery({
    queryKey: [USER_REQUEST_QK, filter],
    queryFn: async ({ queryKey: [, listFilter] }) => {
      const res = await getUserRequestsAction(listFilter as BaseListRequest);
      return res;
    },
    select
  });
};
