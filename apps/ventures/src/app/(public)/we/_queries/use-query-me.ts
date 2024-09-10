import { User } from '@modules/(setting)/settings/users/_models/user';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { CLOUD_ME_ENDPOINT } from '@/query/cloud-endpoints';
import { ME_QK } from '@/query/query-keys';

const select = (input: BaseResponse<User>) => plainToInstance(User, input.data);

export const useQueryMe = () => {
  return useQuery({
    queryKey: [ME_QK],
    queryFn: async () => {
      const res = await clientInstance.get(CLOUD_ME_ENDPOINT);
      return res.data;
    },
    select
  });
};
