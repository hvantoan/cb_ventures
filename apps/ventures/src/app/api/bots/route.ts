import { NextRequest } from 'next/server';

import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_BOT_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const POST = routeHandler(async (req: NextRequest) => {
  const payload = await req.json();
  return serverInstance.post(CLOUD_BOT_LIST_ENDPOINT, payload);
});

export const GET = routeHandler(async () => {
  return serverInstance.post(CLOUD_BOT_LIST_ENDPOINT, { isAll: true });
});
