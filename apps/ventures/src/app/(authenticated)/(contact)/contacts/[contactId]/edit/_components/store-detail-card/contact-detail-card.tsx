'use client';

import DefaultCreditCardImage from '@fumy/ui/assets/images/credit-card-default.png';
import { useQueryContact } from '@modules/(contact)/_queries/use-query-contact';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import ContactField from './contact-field';

interface ContactDetailProps {
  contactId: string;
}

const EMPTY_FIELD = 'Chưa có';

const ContactDetail: React.FC<ContactDetailProps> = ({ contactId }) => {
  const { data: contact } = useQueryContact(contactId);

  return (
    <div className='mt-4 grid gap-4'>
      <Card>
        <CardContent>
          <Typography variant='h5'>{contact?.name}</Typography>
          <Stack className='pb-4 pt-4' spacing={1}>
            <ContactField label='Số điện thoại' value={contact?.phone || EMPTY_FIELD} />
            <ContactField label='Địa chỉ' value={contact?.email || EMPTY_FIELD} />
          </Stack>
        </CardContent>
      </Card>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card>
          <CardContent>
            <Typography variant='h5'>CCCD/CMND</Typography>
            <Stack className='pb-4 pt-4' spacing={1}>
              <ContactField label='Số CMND/CCCD' value={contact?.identityCard || EMPTY_FIELD} />
            </Stack>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 md:col-span-6'>
                <Image
                  src={contact?.frontIdentityCard?.image || DefaultCreditCardImage}
                  alt='product-image'
                  width={240}
                  height={240}
                  quality={100}
                  className='w-full rounded-3xl object-contain'
                />
              </div>
              <div className='col-span-12 md:col-span-6'>
                <Image
                  src={contact?.backIdentityCard?.image || DefaultCreditCardImage}
                  alt='product-image'
                  width={240}
                  height={240}
                  quality={100}
                  className='w-full rounded-3xl object-contain'
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant='h5'>Tài khoản</Typography>
            <Stack className='pb-4 pt-4' spacing={1}>
              <ContactField
                label='Số tại khoản'
                value={contact?.bankCard?.cardNumber?.match(/.{1,4}/g)?.join(' ') || EMPTY_FIELD}
              />
              <ContactField label='Chi nhánh' value={contact?.bankCard?.cardBranch || EMPTY_FIELD} />
              <ContactField label='Ngày hết hạn' value={contact?.bankCard?.expirationDate || EMPTY_FIELD} />
            </Stack>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 md:col-span-6'>
                <Image
                  src={contact?.bankCard?.frontBankCard?.image || DefaultCreditCardImage}
                  alt='product-image'
                  width={240}
                  height={240}
                  quality={100}
                  className='w-full rounded-3xl object-contain'
                />
              </div>
              <div className='col-span-12 md:col-span-6'>
                <Image
                  src={contact?.bankCard?.frontBankCard?.image || DefaultCreditCardImage}
                  alt='product-image'
                  width={240}
                  height={240}
                  quality={100}
                  className='w-full rounded-3xl object-contain'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactDetail;
