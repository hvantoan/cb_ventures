'use server';

import { CLOUD_BOT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { Bot } from '../_models/bot';

export const getBotAction = async (id: string): Promise<BaseResponse<Bot>> => {
  const res = await serverInstance.get<BaseResponse<Bot>>(`${CLOUD_BOT_ENDPOINT}/${id}`);
  return res.data;
};
