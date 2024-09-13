'use server';

import { CLOUD_BOT_DELETE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const deleteBotAction = async (botId: string): Promise<BaseResponse<undefined>> => {
  try {
    const res = await serverInstance.post(CLOUD_BOT_DELETE_ENDPOINT, { id: botId });
    return res.data;
  } catch {
    return {
      success: false,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau.',
      data: undefined
    };
  }
};
