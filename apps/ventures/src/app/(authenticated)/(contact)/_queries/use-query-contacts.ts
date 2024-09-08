import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_CONTACTS_ENDPOINT } from '@/query/internal-endpoints';
import { CONTACT_QK } from '@/query/query-keys';

import { Contact } from '../_model/contact';

const select = (input: BaseResponse<BaseListData<Contact>>): BaseListData<Contact> => {
  const items = plainToInstance(Contact, input.data.items);

  return { count: input.data?.count, items };
};

export const useQueryContacts = (filterParams?: BaseListRequest) => {
  return useQuery({
    queryKey: [CONTACT_QK, filterParams],
    queryFn: async () => (await clientInstance.post(INTERNAL_CONTACTS_ENDPOINT, filterParams)).data,
    placeholderData: keepPreviousData,
    select
  });
};
