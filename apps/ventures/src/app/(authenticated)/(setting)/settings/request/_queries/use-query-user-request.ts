import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { USER_REQUEST_QK } from '@/query/query-keys';

import { getUserRequestAction } from '../_actions/get-user-request-action';
import { UserRequest } from '../_models/user-request';

const select = (input: BaseResponse<UserRequest>) => {
  return plainToInstance(UserRequest, input.data, { groups: ['api'] });
};

export const useQueryUserRequest = (requestId?: string) => {
  return useQuery({
    queryKey: [USER_REQUEST_QK, requestId],
    queryFn: async ({ queryKey: [, id] }) => {
      const res = await getUserRequestAction(id!);
      return res;
    },
    select,
    enabled: Boolean(requestId)
  });
};
