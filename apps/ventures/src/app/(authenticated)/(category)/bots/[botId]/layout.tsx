import { getQueryClient } from '@fumy/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_BOT_GET_ENDPOINT } from '@/query/cloud-endpoints';
import { BOT_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

const BotDetailLayout: React.FC<React.PropsWithChildren & Params<'botId'>> = async ({
  children,
  params: { botId }
}) => {
  const hydrationClient = getQueryClient();
  await hydrationClient.prefetchQuery({
    queryKey: [BOT_QK, botId],
    queryFn: async () => (await serverInstance.post(CLOUD_BOT_GET_ENDPOINT, { id: botId })).data
  });

  const dehydratedState = dehydrate(hydrationClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default BotDetailLayout;
