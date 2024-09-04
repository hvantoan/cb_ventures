'use client';

import { Container } from '@mui/material';

import { VisionCard, VisionData } from './vision-card';

export type VisionsProps = {
  data: VisionData[];
};

export function Vision({ data }: VisionsProps) {
  return (
    <div className='min-h-[calc(100vh - 72px)] relative w-full'>
      <div className='bg-pricing absolute inset-0 z-[-1] h-full w-full ' />
      <Container className='my-8 grid'>
        <div className='w-full'>
          <h2 className='text-32 lg:text-48 text-h_primary m-0 w-full place-self-center text-center'>
            Tầm nhìn - Nhiệm vụ
          </h2>
          <div className='flex justify-center'>
            <p className='max-w-[700px] pb-10 pt-5 text-center text-lg text-white/60'>
              Chúng tôi đã xây dựng một hệ thống tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
              các sàn thương mại điện tử.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 '>
          {data?.map((item, idx) => <VisionCard key={-idx} data={item} />)}
        </div>
      </Container>
    </div>
  );
}
