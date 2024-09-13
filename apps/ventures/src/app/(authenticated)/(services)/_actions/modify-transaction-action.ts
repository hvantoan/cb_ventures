'use server';

import type { AxiosError } from 'axios';

import { CLOUD_TRANSACTION_SAVE_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

import { TransactionTypeMap } from '../_enums/transaction-type';
import { Transaction } from '../_models';

export const modifyTransactionAction = async (transaction: Transaction): Promise<BaseResponse<Transaction>> => {
  try {
    const url = CLOUD_TRANSACTION_SAVE_ENDPOINT;
    const res = await serverInstance.post<BaseResponse<Transaction>>(url, transaction);
    return {
      success: true,
      data: res.data.data,
      message: `${TransactionTypeMap[transaction.transactionType]} thành công`
    };
  } catch (e) {
    const error = e as AxiosError<BaseResponse<Transaction>>;
    return {
      success: false,
      data: error?.response?.data?.data as Transaction,
      message: error?.response?.data?.message ?? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
    };
  }
};
