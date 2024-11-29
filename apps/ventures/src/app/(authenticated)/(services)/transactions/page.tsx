import { getQueryClient } from '@hvantoan/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_TRANSACTION_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { TRANSACTION_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

import { getDefaultTransactionFilter } from '../_helpers/get-default-transaction-filter';
import TransactionListWrapper from './_components/transaction-list-wrapper';

const ReceiptsPaymentsPage: React.FC = async () => {
  const initFilter = getDefaultTransactionFilter();
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [TRANSACTION_QK, initFilter],
    queryFn: async () => {
      const res = await serverInstance.post(CLOUD_TRANSACTION_LIST_ENDPOINT, initFilter);
      return res.data;
    }
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TransactionListWrapper initFilter={initFilter} />
    </HydrationBoundary>
  );
};

export default ReceiptsPaymentsPage;
