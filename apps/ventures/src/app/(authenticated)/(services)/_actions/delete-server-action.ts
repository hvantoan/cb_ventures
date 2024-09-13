'use server';

import { CLOUD_SERVER_DELETE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const deleteServerAction = async (serverId: string): Promise<BaseResponse<undefined>> => {
  try {
    const res = await serverInstance.post(CLOUD_SERVER_DELETE_ENDPOINT, { id: serverId });
    return res.data;
  } catch {
    return {
      success: false,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau.',
      data: undefined
    };
  }
};
