'use server';

import type { AxiosError } from 'axios';

import { CLOUD_BOT_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { Bot } from '../_models/bot';

export const modifyBotAction = async (bot: Bot): Promise<BaseResponse<Bot>> => {
  try {
    const url = CLOUD_BOT_SAVE_ENDPOINT;
    const res = await serverInstance.post<BaseResponse<Bot>>(url, bot);
    return {
      success: true,
      data: res.data.data,
      message: bot?.id ? 'Cập nhật BOT thành công' : 'Thêm BOT thành công'
    };
  } catch (e) {
    const error = e as AxiosError<BaseResponse<Bot>>;
    return {
      success: false,
      data: error?.response?.data?.data as Bot,
      message: error?.response?.data?.message ?? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
    };
  }
};
