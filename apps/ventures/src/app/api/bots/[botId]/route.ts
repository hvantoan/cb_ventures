import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_BOT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async (req, { params: { botId } }: Params<'botId'>) => {
  const res = await serverInstance.get(`${CLOUD_BOT_ENDPOINT}/${botId}`);
  return res;
});
