import dayjs from 'dayjs';

import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_TOP_PRODUCTS_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async () => {
  const payload = {
    period: 3,
    top: 10,
    time: dayjs().toISOString()
  };
  return serverInstance.post(CLOUD_TOP_PRODUCTS_ENDPOINT, payload);
});
