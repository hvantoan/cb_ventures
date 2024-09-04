'use server';

import { type AxiosError } from 'axios';

import { CLOUD_USER_REQUEST_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import type { UserRequest } from '../_models/user-request';

const DEFAULT_SUCCESS_MESSAGE = 'Cập nhật thông tin yêu cầu thành công';
const DEFAULT_ADD_SUCCESS_MESSAGE = 'Thêm yêu cầu thành công';
const DEFAULT_ERROR_MESSAGE = 'Cập nhật thông tin yêu cầu thất bại';
const DEFAULT_ADD_ERROR_MESSAGE = 'Thêm yêu cầu thất bại';

export const saveUserRequestAction = async (payload: UserRequest): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_USER_REQUEST_SAVE_ENDPOINT, payload);

    if (res.data.success) {
      return {
        ...res.data,
        success: false,
        message: payload?.id ? DEFAULT_SUCCESS_MESSAGE : DEFAULT_ADD_SUCCESS_MESSAGE
      };
    }

    throw new Error((res.data?.message ?? payload?.id) ? DEFAULT_ERROR_MESSAGE : DEFAULT_ADD_ERROR_MESSAGE);
  } catch (error) {
    const message = (error as AxiosError<BaseResponse>).response?.data?.message ?? (error as Error).message;
    throw new Error(message);
  }
};
