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
    <div className="relative min-h-[calc(100vh-72px)] w-full">
      <div className="absolute inset-0 h-full w-full linear_bg">
      </div>
      <div className='flex justify-center' data-aos="fade-right" data-aos-duration="1000">
        <div className="container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-20
                      sm:gap-4 md:gap-4 p-20 sm:p-0 md:p-0 sm:py-8">
          <div className="grid gap-4">
            <h1 className="text-54 sm:text-center">
              <span className="text-primary font-bold">Tính năng</span>
            </h1>
            <p className="text-white/60 text-18 sm:text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
            {data.map((item, idx) => (
              <div key={idx} className="bg-wh_color hover:shadow-card content-center p-4 rounded-8 text-left border-card_boder border border-solid group">
                <h6 className="text-text_color group-hover:text-pink text-18">
                  {item}
                </h6>
              </div>
            ))}
          </div>
          <div className="content-center" data-aos="fade-left" data-aos-duration="1000">
            <div className='relative w-full h-full'>
              <Image src="/img/home/features.png" fill alt="feature" className="sm:relative max-w-full h-auto" />
              <div about="top-right" className='absolute top-0 right-0'>
                <div className='border-floating_border_color border-solid border-1 rounded-es-80 rounded-s-8 rounded-ee-40 rounded-e-32 bg-floating_bg_color_2 ps-10 pe-4 py-4 gap-2 flex items-center'>
                  <Image src="/img/home/percent01.png" fill alt="feature" className="relative max-w-[80px]" />
                  <p className='text-18 text-white'>Lợi nhuận đầu tư</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
