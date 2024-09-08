'use client';

import { type DefaultError, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_CONTACTS_ENDPOINT } from '@/query/internal-endpoints';
import { CONTACT_QK } from '@/query/query-keys';

import { Contact } from '../_model/contact';

const select = (data: BaseResponse<Contact>) => {
  return plainToInstance(Contact, data.data);
};
export const useQueryContact = (contactId?: string) => {
  return useQuery<BaseResponse<Contact>, DefaultError, Contact>({
    queryKey: [CONTACT_QK, contactId],
    queryFn: async () => {
      const res = await clientInstance.get(`${INTERNAL_CONTACTS_ENDPOINT}/${contactId}`);
      return res.data;
    },
    enabled: Boolean(contactId),
    select
  });
};
