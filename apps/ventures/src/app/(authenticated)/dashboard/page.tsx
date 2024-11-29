import { getQueryClient } from '@hvantoan/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_BOT_REPORT_CHART_ENDPOINT, CLOUD_SERVER_REPORT_CHART_ENDPOINT } from '@/query/cloud-endpoints';
import { BOT_REPORT_QK, SERVER_REPORT_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

import { BotReports } from './_components/bot-report';
import ServerReports from './_components/server-report/server-report';

const DashboardPage: React.FC = async () => {
  const now = new Date();
  const hydrateClient = getQueryClient();
  await hydrateClient.prefetchQuery({
    queryKey: [BOT_REPORT_QK],
    queryFn: async () =>
      (
        await serverInstance.post(CLOUD_BOT_REPORT_CHART_ENDPOINT, {
          month: now.getMonth() + 1,
          year: now.getFullYear()
        })
      ).data
  });

  await hydrateClient.prefetchQuery({
    queryKey: [SERVER_REPORT_QK],
    queryFn: async () =>
      (
        await serverInstance.post(CLOUD_SERVER_REPORT_CHART_ENDPOINT, {
          month: now.getMonth() + 1,
          year: now.getFullYear()
        })
      ).data
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div className='h-full'>
      <HydrationBoundary state={dehydratedState}>
        <div className='flex grid-cols-1 flex-col gap-2 md:grid md:grid-cols-12'>
          <div className='col-span-12'>
            <BotReports />
          </div>
          <div className='col-span-12'>
            <ServerReports />
          </div>
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default DashboardPage;
