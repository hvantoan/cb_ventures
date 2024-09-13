import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_SERVERS_ENDPOINT } from '@/query/internal-endpoints';
import { SERVER_QK } from '@/query/query-keys';

import { Server } from '../_models/server';
import { QueryServerFilter } from '../_types/server-filter';

const select = (input: BaseResponse<BaseListData<Server>>): BaseListData<Server> => {
  const items = plainToInstance(Server, input.data.items);

  return { count: input.data?.count, items };
};

export const useQueryServers = (filterParams?: QueryServerFilter) => {
  return useQuery({
    queryKey: [SERVER_QK, filterParams],
    queryFn: async () => (await clientInstance.post(INTERNAL_SERVERS_ENDPOINT, filterParams)).data,
    placeholderData: keepPreviousData,
    select
  });
};
