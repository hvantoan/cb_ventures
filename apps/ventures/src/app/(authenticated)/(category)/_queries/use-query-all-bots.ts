import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_BOTS_ENDPOINT } from '@/query/internal-endpoints';
import { ALL_QK, BOT_QK } from '@/query/query-keys';

import { Bot } from '../_models/bot';

const select = (input: BaseResponse<BaseListData<Bot>>): BaseListData<Bot> => {
  const items = plainToInstance(Bot, input.data.items);

  return { count: input.data?.count, items };
};

export const useQueryAllBots = (isActive = true, enabled = true) => {
  return useQuery({
    queryKey: [BOT_QK, ALL_QK, isActive],
    queryFn: async () => (await clientInstance.get(INTERNAL_BOTS_ENDPOINT, { params: { isActive } })).data,
    select,
    enabled
  });
};
