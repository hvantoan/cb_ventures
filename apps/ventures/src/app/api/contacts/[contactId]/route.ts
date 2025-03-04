import { routeHandler } from '@/helpers/route-handler';
import { CLOUD_CONTACT_ENDPOINT } from '@/query/cloud-endpoints';
import { serverInstance } from '@/query/server-instance';

export const GET = routeHandler(async (req, { params: { contactId } }: Params<'contactId'>) => {
  const res = await serverInstance.get(`${CLOUD_CONTACT_ENDPOINT}/${contactId}`);
  return res;
});
