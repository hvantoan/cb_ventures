import { getQueryClient } from '@fumy/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import axios from 'axios';
import { redirect } from 'next/navigation';

import { TOP_PRODUCTS_QK } from '@/query/query-keys';
import { contactsPath } from '@/routes';

import { HotCoins } from './_components/hot-coins';

const DashboardPage: React.FC = () => {
  const hydrateClient = getQueryClient();

  redirect(contactsPath);

  hydrateClient.prefetchQuery({
    queryKey: [TOP_PRODUCTS_QK],
    queryFn: async () => (await axios.get('https://api.binance.com/api/v3/ticker/24hr')).data
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div className='h-full'>
      <HydrationBoundary state={dehydratedState}>
        <div className='flex grid-cols-1 flex-col gap-2 md:grid md:grid-cols-12'>
          <div className='col-span-12 auto-rows-max lg:col-span-5 xl:col-span-6'>
            <HotCoins />
          </div>
          <div className='col-span-12'>{/* <RevenueChart /> */}</div>
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default DashboardPage;
