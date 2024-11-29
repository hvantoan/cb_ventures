import { getQueryClient } from '@hvantoan/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_BOT_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { BOT_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

import { getDefaultBotFilters } from '../_helper/get-default-bot-filters';
import BotListWrapper from './_components/bot-list-wrapper';

const BotsPage: React.FC = async () => {
  const hydrateClient = getQueryClient();
  const botFilters = getDefaultBotFilters();
  await hydrateClient.prefetchQuery({
    queryKey: [BOT_QK, botFilters],
    queryFn: async () => (await serverInstance.post(CLOUD_BOT_LIST_ENDPOINT, botFilters)).data
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BotListWrapper initFilters={botFilters} />
    </HydrationBoundary>
  );
};

export default BotsPage;
