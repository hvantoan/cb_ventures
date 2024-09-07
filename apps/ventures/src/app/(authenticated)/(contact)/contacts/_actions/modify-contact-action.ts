'use server';

import { Contact } from '@modules/(contact)/_model/contact';
import type { AxiosError } from 'axios';

import { CLOUD_CONTACT_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const modifyContactAction = async (contact: Contact): Promise<BaseResponse<Contact>> => {
  try {
    const url = CLOUD_CONTACT_SAVE_ENDPOINT;
    const res = await serverInstance.post<BaseResponse<Contact>>(url, contact);
    return {
      success: true,
      data: res.data.data,
      message: contact?.id ? 'Cập nhật liên hệ thành công' : 'Thêm liên hệ thành công'
    };
  } catch (e) {
    const error = e as AxiosError<BaseResponse<Contact>>;
    return {
      success: false,
      data: error?.response?.data?.data as Contact,
      message: error?.response?.data?.message ?? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
    };
  }
};
