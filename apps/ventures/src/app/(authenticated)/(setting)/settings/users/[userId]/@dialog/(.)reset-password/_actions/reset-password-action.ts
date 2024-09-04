'use server';

import { type AxiosError } from 'axios';

import { CLOUD_USER_RESET_PASSWORD_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { ResetPasswordDto } from '../_models/reset-password-dto';

const DEFAULT_SUCCESS_MESSAGE = 'Đặt lại mật khẩu thành công';
const DEFAULT_ERROR_MESSAGE = 'Đặt lại mật khẩu thất bại';

export const resetPasswordAction = async (payload: ResetPasswordDto): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_USER_RESET_PASSWORD_ENDPOINT, payload);

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
