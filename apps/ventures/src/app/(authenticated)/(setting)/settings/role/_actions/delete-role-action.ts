'use server';

import { type AxiosError } from 'axios';

import { CLOUD_ROLE_DELETE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

const DEFAULT_SUCCESS_MESSAGE = 'Xoá phân quyền thành công';
const DEFAULT_ERROR_MESSAGE = 'Xoá phân quyền thất bại';

export const deleteRoleAction = async (id: string): Promise<BaseResponse> => {
  try {
    const res = await serverInstance.post<BaseResponse>(CLOUD_ROLE_DELETE_ENDPOINT, { id });

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
