'use server';

import { type AxiosError } from 'axios';

import { CLOUD_USER_REQUEST_PROGRESS_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

const DEFAULT_SUCCESS_MESSAGE = 'Yêu cầu đang được xử lý';
const DEFAULT_ERROR_MESSAGE = 'Yêu cầu xử lý không thành công';

export const processUserRequestAction = async (id: string): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_USER_REQUEST_PROGRESS_ENDPOINT, { id });

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
