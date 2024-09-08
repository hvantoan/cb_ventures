import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_MERCHANT_DEFAULT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async () => {
  return serverInstance.post(CLOUD_MERCHANT_DEFAULT_ENDPOINT, {});
});
