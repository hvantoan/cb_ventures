'use client';

import { Typography } from '@mui/material';

import { ContactList } from './contact-list';

interface ContactListWrapperProps {
  initFilters: BaseListRequest;
}

const TITLE = 'Cửa hàng';

const ContactListWrapper: React.FC<ContactListWrapperProps> = ({ initFilters }) => {
  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <Typography typography='h4'>{TITLE}</Typography>
      </div>
      <ContactList initFilters={initFilters} />
    </>
  );
};

export default ContactListWrapper;
