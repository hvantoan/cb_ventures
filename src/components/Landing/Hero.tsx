'use client'
import React from 'react'
import { Button } from 'antd'
import { UilArrowUpRight, UilPlayCircle } from '@iconscout/react-unicons'

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="absolute h-full w-full bg-[#00150f] z-[-1]" />
      <div className='container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-20 sm:gap-4 md:gap-4 p-20 sm:p-0 md:p-0'>
        <div className='content-center py-8'>
          <div className="grid gap-16 sm:gap-8">
            <div className='grid gap-12'>
              <h1 className="text-54 font-bold capitalize sm:text-center">
                Đầu tư tiền của bạn với <span className="text-primary">Lợi nhuận cao</span>
              </h1>
              <p className="text-white text-18 sm:text-center">
                Trong bối cảnh thị trường tài chính năng động, độ chính xác và hiểu biết là điều quan trọng, CB Ventures
                được thành lập để cung cấp giải pháp tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
                các sàn thương mại điện tử.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 float-start gap-4 sm:float-none">
                <Button className="h-14 p-4" htmlType="button" type="primary">
                  <span className='text-secondary text-20'>Bắt đầu</span>
                  <UilArrowUpRight className="text-secondary" />
                </Button>
                <Button className="h-14 p-4 bg-slate-gray text-20 text-white" htmlType="button">
                  <UilPlayCircle className="text-white" />
                  Xem video
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <img src="/img/landing/image-banner.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
