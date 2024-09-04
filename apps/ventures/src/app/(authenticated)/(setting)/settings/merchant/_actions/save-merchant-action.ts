'use server';

import { Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';
import { type AxiosError } from 'axios';

import { CLOUD_MERCHANT_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

const DEFAULT_SUCCESS_MESSAGE = 'Cập nhật thông tin thành công';
const DEFAULT_ERROR_MESSAGE = 'Cập nhật thông tin thất bại';

export const saveMerchantAction = async (payload: Merchant): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_MERCHANT_SAVE_ENDPOINT, payload);

    if (res.data.success) {
      return {
        ...res.data,
        success: false,
        message: DEFAULT_SUCCESS_MESSAGE
      };
    }

    throw new Error(res.data?.message ?? DEFAULT_ERROR_MESSAGE);
  } catch (error) {
    const message = (error as AxiosError<BaseResponse>).response?.data?.message ?? (error as Error).message;
    throw new Error(message);
  }
};
