'use client';

import ImageUploader from '@modules/_components/image-uploader';
import { Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { Contact } from '../../_model/contact';

interface ContactFormIdentityProps {
  control: Control<Contact>;
}

const ContactFormIdentity: React.FC<ContactFormIdentityProps> = ({ control }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <Controller
        control={control}
        name='frontIdentityCard'
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              CMND/CCCD mặt trước
            </Typography>
            <ImageUploader
              image={value}
              onChange={onChange}
              className='text-white/80'
              error={Boolean(error)}
              helpText={error?.message}
            />
          </div>
        )}
      />
      <Controller
        control={control}
        name='backIdentityCard'
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              CMND/CCCD mặt sau
            </Typography>
            <ImageUploader
              image={value}
              onChange={onChange}
              className='text-white/80'
              error={Boolean(error)}
              helpText={error?.message}
            />
          </div>
        )}
      />
    </div>
  );
};

export default ContactFormIdentity;
