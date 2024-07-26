'use client'
import React from 'react'
import { Button } from 'antd'
import Image from 'next/image'

export function Trading() {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)]">
      <div className="absolute h-full w-full bg-[#00150f] z-[-1]" />
      <div className='container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-20 sm:gap-4 md:gap-4 py-20 sm:p-0 md:p-0 sm:py-8'>
        <div data-aos="fade-right" data-aos-duration="1000" >
          <div className='relative w-full h-full'>
            <Image src="/img/home/about01-2.png" alt="hero" className="sm:relative max-w-full h-auto" fill />
            <div about="top" className='absolute top-20'>
              <div className='border-floating_border_color border-solid border-1 rounded-16 bg-floating_bg_color px-6 py-4 gap-2 grid'>
                <h3 className='text-secondary text-32'>10 Năm</h3>
                <p className='text-20 text-white'>Kinh nghiệm Trading</p>
              </div>
            </div>
            <div about="bottom" className='absolute bottom-10 right-0'>
              <div className='border-floating_border_color border-solid border-1 rounded-16 bg-floating_bg_color px-6 py-4 gap-2 grid'>
                <h3 className='text-secondary text-32'>25K+</h3>
                <p className='text-20 text-white'>Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
        <div className='content-center py-8'>
          <div className="grid gap-8">
            <div className='grid gap-8'>
              <h1 className="text-48 font-bold capitalize sm:text-center">
                Gặp gỡ <span className="text-primary"> công ty của chúng tôi </span>
                trừ khi bỏ lỡ cơ hội
              </h1>
              <p className="text-heading_title text-16 sm:text-center">
                Này đó!Rất vui vì bạn dừng lại để gặp công ty của chúng tôi.Đừng bỏ lỡ cơ hội này để tìm hiểu về những gì chúng tôi làm và nhóm tuyệt vời làm cho tất cả xảy ra!Công ty của chúng tôi là tất cả về việc tạo ra các giải pháp sáng tạo và cung cấp các dịch vụ hàng đầu cho khách hàng của chúng tôi.Từ đầu đến cuối, chúng tôi dành riêng để cung cấp kết quả vượt quá mong đợi.
              </p>
            </div>
            <div>
              <div className="sm:flex sm:justify-center">
                <Button className="hover:bg-secondary gap-2 p-6 group" htmlType="button" type="primary">
                  <p className='text-trk text-16'>Tìm hiểu thêm </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
