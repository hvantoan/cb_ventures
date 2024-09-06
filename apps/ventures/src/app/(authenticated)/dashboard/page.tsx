import { getQueryClient } from '@fumy/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import axios from 'axios';

import { TOP_PRODUCTS_QK } from '@/query/query-keys';

import { RevenueChart } from './_components/revenue-chart';

const DashboardPage: React.FC = () => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [TOP_PRODUCTS_QK],
    queryFn: async () => (await axios.get('https://api.binance.com/api/v3/ticker/24hr')).data
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div className='h-full'>
      <HydrationBoundary state={dehydratedState}>
        <div className='flex grid-cols-1 flex-col gap-2 md:grid md:grid-cols-12'>
          {/* <div className='col-span-12 auto-rows-max lg:col-span-5 xl:col-span-4'>
            <HotCoins key={1} />
          </div>
          <div className='col-span-12 auto-rows-max lg:col-span-5 xl:col-span-4'>
            <HotCoins key={2} />
          </div>
          <div className='col-span-12 auto-rows-max lg:col-span-5 xl:col-span-4'>
            <HotCoins key={3} />
          </div> */}
          <div className='col-span-12'>
            <RevenueChart />
          </div>
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default DashboardPage;
