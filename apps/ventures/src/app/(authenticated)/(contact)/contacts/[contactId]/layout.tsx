import { getQueryClient } from '@hvantoan/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_CONTACT_DETAIL_ENDPOINT } from '@/query/cloud-endpoints';
import { CONTACT_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

const ContactDetailLayout: React.FC<React.PropsWithChildren & Params<'contactId'>> = async ({
  children,
  params: { contactId }
}) => {
  const hydrationClient = getQueryClient();
  await hydrationClient.prefetchQuery({
    queryKey: [CONTACT_QK, contactId],
    queryFn: async () => (await serverInstance.post(CLOUD_CONTACT_DETAIL_ENDPOINT, { id: contactId })).data
  });

  const dehydratedState = dehydrate(hydrationClient);
  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default ContactDetailLayout;
