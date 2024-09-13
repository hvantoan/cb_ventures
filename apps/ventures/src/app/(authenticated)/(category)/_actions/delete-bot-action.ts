'use server';

import { CLOUD_BOT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const deleteBotAction = async (botId: string): Promise<BaseResponse<undefined>> => {
  try {
    const res = await serverInstance.delete(`${CLOUD_BOT_ENDPOINT}/${botId}`);
    return res.data;
  } catch {
    return {
      success: false,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau.',
      data: undefined
    };
  }
};
