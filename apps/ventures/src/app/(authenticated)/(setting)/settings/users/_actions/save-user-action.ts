'use server';

import { AddUserDto } from '@modules/(setting)/settings/users/_models/add-user-dto';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { type AxiosError } from 'axios';

import { CLOUD_USER_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

const DEFAULT_SUCCESS_MESSAGE = 'Cập nhật thông tin người dùng thành công';
const DEFAULT_ADD_SUCCESS_MESSAGE = 'Thêm người dùng thành công';
const DEFAULT_ERROR_MESSAGE = 'Cập nhật thông tin người dùng thất bại';
const DEFAULT_ADD_ERROR_MESSAGE = 'Thêm người dùng thất bại';

export const saveUserAction = async (payload: User | AddUserDto): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_USER_SAVE_ENDPOINT, payload);

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
