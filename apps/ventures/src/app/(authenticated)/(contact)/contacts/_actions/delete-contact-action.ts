'use server';

import { CLOUD_CONTACT_DELETE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const deleteContactAction = async (contactId: string): Promise<BaseResponse<undefined>> => {
  try {
    const res = await serverInstance.post(CLOUD_CONTACT_DELETE_ENDPOINT, { id: contactId });
    return res.data;
  } catch {
    return {
      success: false,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau.',
      data: undefined
    };
  }
};
