'use client';

import DefaultProductImage from '@hvantoan/ui/assets/images/product-default.png';
import { useQueryBot } from '@modules/(category)/_queries/use-query-bot';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import BotField from './bot-field';

interface BotDetailProps {
  botId: string;
}

const BotDetail: React.FC<BotDetailProps> = ({ botId }) => {
  const { data: bot } = useQueryBot(botId);

  return (
    <div className='mt-4 grid grid-cols-12 gap-8 md:px-4'>
      <div className='col-span-12 md:col-span-3'>
        <Image
          src={bot?.avatar?.image || DefaultProductImage}
          alt='bot-image'
          width={480}
          height={480}
          quality={100}
          className='h-auto w-full rounded-3xl object-contain'
        />
      </div>
      <div className='col-span-12 md:col-span-9'>
        <Card>
          <CardContent>
            <Typography variant='h5'>{bot?.name}</Typography>
            <Stack className='pb-4 pt-4' spacing={1}>
              {Boolean(bot?.description) && <BotField label='Mô tả' value={bot?.description ?? ''} isDescription />}
            </Stack>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BotDetail;
