'use client';

import { type DefaultError, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_BOTS_ENDPOINT } from '@/query/internal-endpoints';
import { BOT_QK } from '@/query/query-keys';

import { Bot } from '../_models/bot';

const select = (data: BaseResponse<Bot>) => {
  return plainToInstance(Bot, data.data);
};
export const useQueryBot = (botId?: string) => {
  return useQuery<BaseResponse<Bot>, DefaultError, Bot>({
    queryKey: [BOT_QK, botId],
    queryFn: async () => {
      const res = await clientInstance.get(`${INTERNAL_BOTS_ENDPOINT}/${botId}`);
      return res.data;
    },
    enabled: Boolean(botId),
    select
  });
};
