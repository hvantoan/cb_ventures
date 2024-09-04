'use client';

import { Container } from '@mui/material';
import React from 'react';

import { RoadmapCard } from './roadmap-card';
import type { RoadmapItem } from './roadmap-card';

export type RoadmapProps = {
  data: RoadmapItem[];
};

export function Roadmap({ data }: RoadmapProps) {
  return (
    <div className='relative min-h-[calc(100vh-72px)] w-full pb-2'>
      <div className='from-bg_color_trans to-bg_color absolute inset-0 h-full w-full bg-gradient-to-br' />
      <Container className='grid gap-8 py-10'>
        <div className='grid gap-8'>
          <h2 className='lg:text-54 text-32 text-h_primary m-0 text-center font-bold'>Roadmap</h2>
          <p className='text-18 m-0 mx-auto w-5/6 text-center text-white/80'>
            Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
            đúng các bước để đến đích của bạn.
          </p>
        </div>
        <div className='relative'>
          <div className='grid max-sm:gap-4'>
            {data.map((item, idx) => (
              <RoadmapCard key={-idx} isLeft={idx % 2 !== 0} data={item} />
            ))}
          </div>
          <div className='absolute left-[calc(50%-6px)] top-0 h-full w-[12px] py-[10em] max-sm:hidden'>
            <div className='bg-h_primary absolute z-10 h-[50%] w-[12px] rounded' />
            <div className='bg-h_primary/10 h-full w-[12px] rounded' />
          </div>
        </div>
      </Container>
    </div>
  );
}
