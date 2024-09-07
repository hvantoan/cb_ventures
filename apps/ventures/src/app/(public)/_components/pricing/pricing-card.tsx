'use client';

import { KeyboardArrowRight } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Card, CardActions, Chip, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { contactPath } from '@/routes';

export type PricingType = 'Basic' | 'Pro' | 'Premium' | 'Enterprise';
export type PricingInterval = 'Monthly' | 'Yearly';

interface Props {
  data: any;
}

export function PricingCard({ data }: Props) {
  const router = useRouter();
  return (
    <Card
      variant='outlined'
      className='hover:border-h_primary from-bg_color_trans to-bg_color group bg-transparent bg-gradient-to-br p-4 shadow-sm'
    >
      <Stack gap={2}>
        <div>
          <Chip
            variant='soft'
            label={data.interval}
            color='primary'
            className='rounded-16 group-hover:bg-h_primary capitalize group-hover:text-white'
          />
        </div>
        <Typography typography='h2' className='text-20 uppercase text-white'>
          {data.type}
        </Typography>
        <Divider className='border-white' />
        <List>
          {data.features.slice(0, 5).map((feature: any, index: any) => (
            <ListItem key={index} color='primary'>
              <Stack direction='row' gap={2}>
                <CheckCircleIcon color='primary' />
                <span className='text-15 text-white'>{feature}</span>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Divider className='border-white' />
      <CardActions>
        <span className='text-h_secondary mr-auto text-[26px] font-bold'>
          {`${data.price}${data.monetaryUnit}`}/<span className='text-18 capitalize text-white'>{data.interval}</span>
        </span>
        <Button
          variant='soft'
          color='primary'
          onClick={() => router.push(contactPath)}
          className='group-hover:bg-h_primary group-hover:text-white'
        >
          Bắt đầu
          <KeyboardArrowRight />
        </Button>
      </CardActions>
    </Card>
  );
}
