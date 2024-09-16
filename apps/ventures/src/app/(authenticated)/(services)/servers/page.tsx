import { getQueryClient } from '@fumy/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_SERVER_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { SERVER_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

import { getDefaultServerFilter } from '../_helpers/get-default-server-filter';
import ServerListWrapper from './_components/server-list-wrapper';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const ServerPage: React.FC<SearchParamProps> = async () => {
  const initFilters = getDefaultServerFilter();
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [SERVER_QK, initFilters],
    queryFn: async () => {
      const res = await serverInstance.post(CLOUD_SERVER_LIST_ENDPOINT, initFilters);
      return res.data;
    }
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ServerListWrapper initFilters={initFilters} />
    </HydrationBoundary>
  );
};

export default ServerPage;
