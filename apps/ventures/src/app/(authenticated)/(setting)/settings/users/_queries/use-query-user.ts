import { getUserAction } from '@modules/(setting)/settings/users/_actions/get-user-action';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { USER_QK } from '@/query/query-keys';

const select = (input: BaseResponse<User>) => plainToInstance(User, input.data);

export const useQueryUser = (userId?: string) => {
  return useQuery({
    queryKey: [USER_QK, userId],
    queryFn: async ({ queryKey: [, id] }) => getUserAction(id as string),
    select,
    enabled: Boolean(userId)
  });
};
