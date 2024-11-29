'use client';

import ImageUploader from '@modules/_components/image-uploader';
import { Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { Contact } from '../../_model/contact';

interface ContactFormBankProps {
  control: Control<Contact>;
}

const ContactFormBank: React.FC<ContactFormBankProps> = ({ control }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <Controller
        control={control}
        name='bankCard.frontBankCard'
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              Mặt trước thẻ ngân hàng
            </Typography>
            <ImageUploader
              image={value}
              onChange={onChange}
              error={Boolean(error)}
              helpText={error?.message}
              className='text-white/80'
            />
          </div>
        )}
      />
      <Controller
        control={control}
        name='bankCard.backBankCard'
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1' className='text-white/80'>
              Mặt sau thẻ ngân hàng
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

export default ContactFormBank;
