'use server';

import type { AxiosError } from 'axios';

import { CLOUD_SERVER_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { Server } from '../_models/server';

export const modifyServerAction = async (server: Server): Promise<BaseResponse<Server>> => {
  try {
    const url = CLOUD_SERVER_SAVE_ENDPOINT;
    const res = await serverInstance.post<BaseResponse<Server>>(url, server);
    return {
      success: true,
      data: res.data.data,
      message: server?.id ? 'Cập nhật Server thành công' : 'Thêm Server thành công'
    };
  } catch (e) {
    const error = e as AxiosError<BaseResponse<Server>>;
    return {
      success: false,
      data: error?.response?.data?.data as Server,
      message: error?.response?.data?.message ?? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
    };
  }
};
