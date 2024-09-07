'use client';

import { Button, Container } from '@mui/material';
import React from 'react';

import { Adviser, AdviserCard } from './advisers-card';

export type AdvisersProps = {
  data: Adviser[];
};

export function Advisers({ data }: AdvisersProps) {
  return (
    <div className='min-h-[calc(100vh - 72px)] relative w-full'>
      <div className='absolute inset-0 z-[-1] h-full w-full' />
      <Container className='grid py-10'>
        <div className='w-full'>
          <h2 className='lg:text-54 text-32 m-0 w-full place-self-center text-center text-white'>
            Gặp <span className='text-primary'>Cố Vấn</span>
          </h2>
          <div className='flex justify-center'>
            <p className='text-18 m-0 mx-auto pb-10 pt-5 text-center text-white/60'>
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
          {data.slice(0, 8).map((adviser, idx) => (
            <AdviserCard key={idx} adviser={adviser} />
          ))}
        </div>
        <div className='mt-[20px] flex place-content-center'>
          <Button color='primary'>
            <p className='text-16 m-0'>Xem thêm</p>
          </Button>
        </div>
      </Container>
    </div>
  );
}
