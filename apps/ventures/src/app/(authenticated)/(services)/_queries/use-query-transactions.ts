import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_TRANSACTIONS_ENDPOINT } from '@/query/internal-endpoints';
import { TRANSACTION_QK } from '@/query/query-keys';

import { QueryTransactionFilter } from '../_types/transaction-filter';
import { Transaction } from '../transactions/_models/transaction';

const select = (input: BaseResponse<BaseListData<Transaction>>): BaseListData<Transaction> => {
  const items = plainToInstance(Transaction, input.data.items);

  return { count: input.data?.count, items };
};

export const useQueryTransactions = (filterParams?: QueryTransactionFilter) => {
  return useQuery({
    queryKey: [TRANSACTION_QK, filterParams],
    queryFn: async () => (await clientInstance.post(INTERNAL_TRANSACTIONS_ENDPOINT, filterParams)).data,
    placeholderData: keepPreviousData,
    select
  });
};
