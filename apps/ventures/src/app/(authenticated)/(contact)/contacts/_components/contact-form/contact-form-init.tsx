'use client';

import { Contact } from '@modules/(contact)/_model/contact';
import { useQueryContact } from '@modules/(contact)/_queries/use-query-contact';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface ContactFormInitProps {
  contactId?: string;
}

const ContactFormInit: React.FC<ContactFormInitProps> = ({ contactId }) => {
  const { reset } = useFormContext<Contact>();
  const { data } = useQueryContact(contactId);

  useEffect(() => {
    if (!contactId || !data) return;
    reset(data);
  }, [contactId, data]);

  return null;
};

export default memo(ContactFormInit);
