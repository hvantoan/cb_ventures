import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export function Features() {
  const data = [
    'Chế tạo tỉ mỉ bằng cách sử dụng bộ công cụ, thuật toán toàn diện và sự giám sát chặt chẽ của các nhà phân tích giao dịch.',
    'Sự kết hợp giữa công nghệ và chuyên môn này được thiết kế để tạo ra lợi nhuận hàng tháng ổn định và bền vững.',
    'Hệ thống này không tĩnh mà là một thực thể năng động, được quản lý và cập nhật liên tục để thích ứng với bối cảnh tài chính không ngừng phát triển.'
  ];

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='linear_bg absolute inset-0 z-0 h-full w-full' />
      <Container className='mb-10 grid min-h-screen grid-cols-1 gap-20 lg:grid-cols-2'>
        <div className='z-20'>
          <div className='grid gap-4' data-aos='fade-right' data-aos-duration='1000'>
            <h2 className='lg:text-54 text-32 max-sm:text-center'>
              <span className='text-h_primary font-bold'>Tính năng</span>
            </h2>
            <p className='lg:text-18 text-16 m-0 text-white/60 max-sm:text-center'>
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
            {data.map((item, idx) => (
              <div
                key={idx}
                className='bg-body_color hover:bg-wh_color hover:shadow-card rounded-8 border-card_boder group content-center border border-solid p-4 text-left'
              >
                <h6 className='text-subtext group-hover:text-pink text-18 m-0'>{item}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className='relative h-full' data-aos='fade-left' data-aos-duration='1000'>
          <div className='relative z-[2] h-full w-full'>
            <Image
              src='/ventures/img/home/features.png'
              alt='feature'
              className='max-w-100 h-full object-contain max-sm:relative'
              height={1000}
              width={1000}
            />
            <div
              about='top-right'
              className='absolute right-[-20%] top-[10%] w-[80%] max-sm:right-0 max-sm:top-[-10%]'
              data-aos='fade-left'
              data-aos-duration='2000'
            >
              <div className='border-floating_border_color border-1 rounded-es-80 rounded-s-8  rounded-ee-40 rounded-e-32 bg-floating_bg_color_2 flex items-center gap-6 border-solid py-4 pe-4 ps-10 backdrop-blur-[24px]'>
                <Image
                  src='/ventures/img/home/percent01.png'
                  width={80}
                  height={80}
                  alt='feature'
                  className='relative max-w-[80px]'
                />
                <p className='text-18 m-0 text-white'>Lợi nhuận đầu tư</p>
              </div>
            </div>
            <div
              about='bottom-left'
              className='absolute bottom-[10%] left-0 w-[80%] max-sm:bottom-0'
              data-aos='fade-right'
              data-aos-duration='2000'
            >
              <div className='border-floating_border_color border-1 rounded-e-80 rounded-ee-8 rounded-es-40 rounded-s-32 bg-floating_bg_color_2 flex items-center gap-6 border-solid px-8 py-4 backdrop-blur-[24px]'>
                <div className='content-center'>
                  <h3 className='text-h_secondary lg:text-32 text-24'>10M</h3>
                </div>
                <p className='text-18 m-0 text-white'>Có sẵn cho thanh khoản</p>
              </div>
            </div>
          </div>
          {/* Backgroud css */}
          <div className='feature h-full w-full sm:hidden'>
            <div className='feature feature_shape-item absolute'>
              <span />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
