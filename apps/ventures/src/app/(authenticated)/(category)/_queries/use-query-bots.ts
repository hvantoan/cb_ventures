import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_BOTS_ENDPOINT } from '@/query/internal-endpoints';
import { BOT_QK } from '@/query/query-keys';

import { Bot } from '../_models/bot';
import { QueryBotFilter } from '../_types/bot-filter';

export const useQueryBots = (filters: QueryBotFilter) => {
  return useQuery<BaseResponse<BaseListData<Bot>>>({
    queryKey: [BOT_QK, filters],
    queryFn: async () => {
      const res = await clientInstance.post(INTERNAL_BOTS_ENDPOINT, filters);
      return res.data;
    },
    placeholderData: keepPreviousData
  });
};
