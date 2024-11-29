import { getQueryClient } from '@hvantoan/utilities/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { CLOUD_CONTACT_LIST_ENDPOINT } from '@/query/cloud-endpoints';
import { STORE_QK } from '@/query/query-keys';
import { serverInstance } from '@/query/server-instance';

import ContactListWrapper from './_components/contact-list-wrapper';
import { getDefaultContactFilters } from './_helpers/get-default-contact-filters';

const ContactsPage: React.FC = async () => {
  const hydrateClient = getQueryClient();
  const contactFilters = getDefaultContactFilters();
  await hydrateClient.prefetchQuery({
    queryKey: [STORE_QK, contactFilters],
    queryFn: async () => (await serverInstance.post(CLOUD_CONTACT_LIST_ENDPOINT, contactFilters)).data
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ContactListWrapper initFilters={contactFilters} />
    </HydrationBoundary>
  );
};

export default ContactsPage;
