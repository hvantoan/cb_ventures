'use client'
import Image from 'next/image'
import React from 'react'

export function Features() {
  const data = [
    'Chế tạo tỉ mỉ bằng cách sử dụng bộ công cụ, thuật toán toàn diện và sự giám sát chặt chẽ của các nhà phân tích giao dịch.',
    'Sự kết hợp giữa công nghệ và chuyên môn này được thiết kế để tạo ra lợi nhuận hàng tháng ổn định và bền vững.',
    'Hệ thống này không tĩnh mà là một thực thể năng động, được quản lý và cập nhật liên tục để thích ứng với bối cảnh tài chính không ngừng phát triển.'
  ]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full linear_bg z-0" />
      <div className="container min-h-screen mx-auto grid grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-20 p-20 sm:p-0 sm:py-10 sm:pb-20">
        <div className='z-20'>
          <div className="grid gap-4" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-54 sm:text-32 sm:text-center">
              <span className="text-primary font-bold">Tính năng</span>
            </h2>
            <p className="text-white/60 text-18 sm:text-16 sm:text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
            {data.map((item, idx) => (
              <div key={idx} className="bg-body_color hover:bg-wh_color hover:shadow-card content-center p-4 rounded-8 text-left border-card_boder border border-solid group">
                <h6 className="text-text_color group-hover:text-pink text-18">
                  {item}
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full" data-aos="fade-left" data-aos-duration="1000" >
          <div className='relative w-full h-full z-[2]'>
            <Image src="/img/home/features.png" alt="feature" className="sm:relative object-contain max-w-full h-full" fill />
            <div about="top-right" className='absolute top-0 sm:top-[-10%] right-[-20%] sm:right-0 w-[50%] sm:w-[80%]' data-aos="fade-left" data-aos-duration="2000">
              <div className='backdrop-blur-[24px] border-floating_border_color border-solid border-1  rounded-es-80 rounded-s-8 rounded-ee-40 rounded-e-32  bg-floating_bg_color_2 ps-10 pe-4 py-4 gap-6 flex items-center'>
                <Image src="/img/home/percent01.png" fill alt="feature" className="relative max-w-[80px]" />
                <p className='text-18 text-white'>Lợi nhuận đầu tư</p>
              </div>
            </div>
            <div about="bottom-left" className='absolute bottom-0 sm:bottom-[-10%] left-0 w-[50%] sm:w-[80%]' data-aos="fade-right" data-aos-duration="2000">
              <div className='backdrop-blur-[24px] border-floating_border_color border-solid border-1 rounded-e-80 rounded-ee-8 rounded-es-40 rounded-s-32 bg-floating_bg_color_2 py-4 px-8 gap-6 flex items-center'>
                <div className='h-20 content-center'>
                  <h3 className='text-secondary text-32'>10M</h3>
                </div>
                <p className='text-18 text-white'>Có sẵn cho thanh khoản</p>
              </div>
            </div>
          </div>
          {/* Backgroud css */}
          <div className='feature w-full h-full sm:hidden'>
            <div className='feature feature_shape-item absolute'>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
