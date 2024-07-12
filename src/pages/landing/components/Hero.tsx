'use client'
import React from 'react'
import { Button } from 'antd'
import { UilArrowUpRight, UilPlayCircle } from '@iconscout/react-unicons'

export default function Hero({ }) {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full bg-[#00150f] z-[-1]" />
      <div className='flex justify-center'>
        <div className="min-h-screen container grid items-center grid-flow-row-dense sm:grid-cols-1 grid-cols-2 sm:gap-4 gap-20 sm:p-4 p-20 ">
          <div>
            <div className="grid gap-10">
              <h1 className="text-4xl md:text-6xl">
                Đầu tư tiền của bạn với <span className="text-primary">Lợi nhuận cao hơn</span>
              </h1>
              <p className="text-white text-lg sm:text-base">
                Trong bối cảnh thị trường tài chính năng động, độ chính xác và hiểu biết là điều quan trọng, CB Ventures
                được thành lập để cung cấp giải pháp tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
                các sàn thương mại điện tử.
              </p>
              <div>
                <div className="grid grid-cols-2 float-start gap-4">
                  <Button className="h-16 p-4" htmlType="button" type="primary">
                    <p className="text-dark text-xl">Bắt đầu</p>
                    <UilArrowUpRight className="text-black" />
                  </Button>
                  <Button className="h-16 p-4 bg-body text-pink text-xl" htmlType="button">
                    <UilPlayCircle className="text-white" />
                    Xem video
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full h-full">
              <img src="/img/landing/image-banner.png" alt="hero" className="object-contain w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
