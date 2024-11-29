'use client';

import TradingImage from '@hvantoan/ui/assets/images/about01-2.png';
import { Button, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export function Trading() {
  return (
    <section className='relative min-h-[calc(100vh-72px)] w-full'>
      <div className='absolute z-[-1] h-full w-full' />
      <Container className='relative grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 lg:gap-10'>
        <div className='relative h-full'>
          <div className='relative h-full w-full'>
            <Image src={TradingImage} alt='hero' height={1000} width={1000} className='h-full w-full object-contain' />
            <div
              about='top'
              className='absolute top-[20%] max-sm:top-[5%]'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <div className='border-floating_border_color border-1 rounded-16 bg-floating_bg_color grid gap-2 border-solid px-6 py-4'>
                <h3 className='text-h_secondary lg:text-32 text-22 m-0'>10 Năm</h3>
                <p className='text-20 m-0 text-white'>Kinh nghiệm Trading</p>
              </div>
            </div>
            <div
              about='bottom'
              className='absolute bottom-[15%] right-0 max-sm:bottom-0'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <div className='border-floating_border_color border-1 rounded-16 bg-floating_bg_color grid gap-2 border-solid px-6 py-4'>
                <h3 className='text-h_secondary text-22 lg:text-32 m-0'>25K+</h3>
                <p className='text-20 m-0 text-white'>Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
        <div className='content-center py-8'>
          <div className='grid gap-8'>
            <div className='grid gap-8'>
              <h1 className='lg:text-48 text-32 font-bold capitalize text-white max-sm:text-center'>
                Gặp gỡ <span className='text-h_primary'> công ty của chúng tôi </span>
                trừ khi bỏ lỡ cơ hội
              </h1>
              <p className='text-heading_title text-16 max-sm:text-center'>
                Này đó!Rất vui vì bạn dừng lại để gặp công ty của chúng tôi.Đừng bỏ lỡ cơ hội này để tìm hiểu về những
                gì chúng tôi làm và nhóm tuyệt vời làm cho tất cả xảy ra!Công ty của chúng tôi là tất cả về việc tạo ra
                các giải pháp sáng tạo và cung cấp các dịch vụ hàng đầu cho khách hàng của chúng tôi.Từ đầu đến cuối,
                chúng tôi dành riêng để cung cấp kết quả vượt quá mong đợi.
              </p>
            </div>
            <div>
              <div className='max-sm:flex max-sm:justify-center'>
                <Button color='primary'>
                  <p className='text-trk text-16 m-0'>Tìm hiểu thêm </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
