'use client';

import { Container } from '@mui/material';
import React from 'react';

import { PricingCard } from './pricing-card';

export type PricingProps = {
  data: any[];
};

export function Pricing({ data }: PricingProps) {
  return (
    <div className='relative min-h-[calc(100vh-72px)] w-full'>
      <div className='from-bg_color_trans to-bg_color absolute h-full w-screen bg-gradient-to-br' />
      <Container className='grid gap-8 py-10'>
        <div className='grid gap-8'>
          <h2 className='lg:text-54 text-32 m-0 text-center font-bold text-white'>
            Kế hoạch
            <span className='text-h_primary'> Pricings </span>
            của chúng tôi
          </h2>
          <p className='text-18 m-0 mx-auto w-5/6 text-center text-white'>
            Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
            đúng các bước để đến đích của bạn.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {data.map((pricing, idx) => (
            <PricingCard key={idx} data={pricing} />
          ))}
        </div>
      </Container>
    </div>
  );
}
