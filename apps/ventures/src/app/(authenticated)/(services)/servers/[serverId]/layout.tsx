import { getQueryClient } from '@fumy/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_SERVER_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { SERVER_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

const ServerDetailLayout: React.FC<React.PropsWithChildren & Params<'serverId'>> = async ({
  children,
  params: { serverId }
}) => {
  const hydrationClient = getQueryClient();
  await hydrationClient.prefetchQuery({
    queryKey: [SERVER_QK, serverId],
    queryFn: async () => (await serverInstance.post(CLOUD_SERVER_GET_ENDPOINT, { id: serverId })).data
  });

  const dehydratedState = dehydrate(hydrationClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default ServerDetailLayout;
