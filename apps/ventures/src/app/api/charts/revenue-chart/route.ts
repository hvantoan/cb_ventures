import dayjs from 'dayjs';

import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_REVENUE_CHART_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const dynamic = 'force-dynamic';

export const GET = routeHandler(async () => {
  return serverInstance.post(CLOUD_REVENUE_CHART_ENDPOINT, {
    from: dayjs().subtract(1, 'month').startOf('date').toISOString(),
    to: dayjs().endOf('date').toISOString()
  });
});
