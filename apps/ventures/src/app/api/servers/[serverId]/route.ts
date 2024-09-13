import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_SERVER_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async (req, { params: { serverId } }: Params<'serverId'>) => {
  const res = await serverInstance.get(`${CLOUD_SERVER_ENDPOINT}/${serverId}`);
  return res;
});
