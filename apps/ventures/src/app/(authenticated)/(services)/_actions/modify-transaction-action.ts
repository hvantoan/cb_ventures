'use server';

import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { CLOUD_TRANSACTION_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { TransactionTypeMap } from '../_enums/transaction-type';
import { Transaction } from '../_models';

export const modifyTransactionAction = async (transaction: Transaction): Promise<BaseResponse<string>> => {
  try {
    const url = CLOUD_TRANSACTION_SAVE_ENDPOINT;
    const res = await serverInstance.post<BaseResponse<string>>(url, transaction);

    if (res.data.success) {
      return {
        ...res.data,
        success: true,
        message: `${TransactionTypeMap[transaction.transactionType]} thành công`
      };
    }

    throw new Error(res.data?.message ?? DEFAULT_ERROR_MESSAGE);
  } catch (e: any) {
    return {
      success: false,
      data: '',
      message: e.message ?? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
    };
  }
};
