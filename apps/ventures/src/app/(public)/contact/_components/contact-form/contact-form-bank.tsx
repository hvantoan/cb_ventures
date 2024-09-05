'use client';

import ImageUploader from '@modules/_components/image-uploader';
import { Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { Contact } from '../../_model/contact';
import { contactFormLabels } from './contact-form.define';

interface ContactFormBankProps {
  control: Control<Contact>;
}

const ContactFormBank: React.FC<ContactFormBankProps> = ({ control }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <Controller
        control={control}
        name='frontBankCard'
        render={({ field: { onChange, value } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              {contactFormLabels.frontBankCard}
            </Typography>
            <ImageUploader image={value} onChange={onChange} />
          </div>
        )}
      />
      <Controller
        control={control}
        name='backBankCard'
        render={({ field: { onChange, value } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              {contactFormLabels.backBankCard}
            </Typography>
            <ImageUploader image={value} onChange={onChange} />
          </div>
        )}
      />
    </div>
  );
};

export default ContactFormBank;
