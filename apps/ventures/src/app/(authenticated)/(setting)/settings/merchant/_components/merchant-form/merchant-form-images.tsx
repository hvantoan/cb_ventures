'use client';

import { Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';
import ImageUploader from '@modules/_components/image-uploader';
import { Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { merchantFormLabels } from './merchant-form.define';

interface MerchantFormImagesProps {
  control: Control<Merchant>;
}

const MerchantFormImages: React.FC<MerchantFormImagesProps> = ({ control }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
      <Controller
        control={control}
        name='logo'
        render={({ field: { onChange, value } }) => (
          <div className='flex flex-col gap-2'>
            <Typography typography='subtitle1'>{merchantFormLabels.logo}</Typography>
            <ImageUploader image={value} onChange={onChange} />
          </div>
        )}
      />
    </div>
  );
};

export default MerchantFormImages;
