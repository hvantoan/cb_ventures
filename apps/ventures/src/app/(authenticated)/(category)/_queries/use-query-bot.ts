import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { BOT_QK } from '@/query/query-keys';

import { getBotAction } from '../_actions/get-bot-action';
import { Bot } from '../_models/bot';

const select = (input: BaseResponse<Bot>) => plainToInstance(Bot, input.data);

export const useQueryBot = (botId?: string) => {
  return useQuery({
    queryKey: [BOT_QK, botId],
    queryFn: async ({ queryKey: [, id] }) => getBotAction(id as string),
    select,
    enabled: Boolean(botId)
  });
};
