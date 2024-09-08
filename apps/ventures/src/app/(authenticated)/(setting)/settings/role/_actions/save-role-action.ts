'use server';

import { Role } from '@modules/(setting)/settings/role/_models/role';
import { type AxiosError } from 'axios';

import { CLOUD_ROLE_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

const DEFAULT_SUCCESS_MESSAGE = 'Cập nhật thông tin phân quyền thành công';
const DEFAULT_ADD_SUCCESS_MESSAGE = 'Thêm phân quyền thành công';
const DEFAULT_ERROR_MESSAGE = 'Cập nhật thông tin phân quyền thất bại';
const DEFAULT_ADD_ERROR_MESSAGE = 'Thêm phân quyền thất bại';

export const saveRoleAction = async (payload: Role): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_ROLE_SAVE_ENDPOINT, payload);

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
