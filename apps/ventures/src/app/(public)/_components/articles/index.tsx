'use client';

import { Button, Container, Typography } from '@mui/material';

import ArticlesCard, { Article } from './articles-card';

export type ArticlesProps = {
  data: Article[];
};

export function Articles({ data }: ArticlesProps) {
  return (
    <div className='min-h-[calc(100vh - 72px)] relative w-full'>
      <div className='absolute inset-0 z-[-1] h-full w-full' />
      <Container className='grid py-20'>
        <div className='w-full'>
          <Typography typography='h3' className='lgtext-54 text-32 w-full place-self-center text-center text-white'>
            Bài viết cho <span className='text-h_primary'>Pro Trader</span>
          </Typography>
          <div className='flex justify-center'>
            <p className='max-w-[700px] pb-10 pt-5 text-center text-lg text-white/60'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis facere blanditiis id provident
              facilis quisquam corrupti modi ratione iure pariatur deserunt nostrum temporibus itaque illo sapiente quos
              voluptatum. Laboriosam?
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {data?.slice(0, 3).map((art, idx) => <ArticlesCard key={`data${-idx}`} item={art} />)}
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
