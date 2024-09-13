import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_USERS_ENDPOINT } from '@/query/internal-endpoints';
import { ALL_QK, USER_QK } from '@/query/query-keys';

import { User } from '../_models/user';

const select = (input: BaseResponse<BaseListData<User>>): BaseListData<User> => {
  const items = plainToInstance(User, input.data.items);
  return { count: input.data?.count, items };
};

export const useQueryAllUsers = () => {
  return useQuery({
    queryKey: [USER_QK, ALL_QK],
    queryFn: async () => (await clientInstance.post(INTERNAL_USERS_ENDPOINT, { isAll: true })).data,
    select
  });
};
