import { NextRequest } from 'next/server';

import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_AU_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async (request: NextRequest) => {
  const params: { [K: string]: string | Array<string> } = Object.fromEntries(request.nextUrl.searchParams);

  return serverInstance.get(CLOUD_AU_ENDPOINT, { params: params?.lv1 ? params : null });
});
