import { User } from '@modules/(setting)/settings/users/_models/user';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { USER_QK } from '@/query/query-keys';

import { getUserListAction } from '../_actions/get-user-list-action';

const select = (input: BaseResponse<BaseListData<User>>) => {
  return {
    count: input.data.count,
    items: plainToInstance(User, input.data.items)
  } as BaseListData<User>;
};

export const useQueryUsers = (filter: BaseListRequest) => {
  return useQuery({
    queryKey: [USER_QK, filter],
    queryFn: async ({ queryKey: [, queryFilter] }) => getUserListAction(queryFilter as BaseListRequest),
    select
  });
};
