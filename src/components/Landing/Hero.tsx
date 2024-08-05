'use client'
import React from 'react'
import { Button, Row } from 'antd'
import { UilArrowRight, UilPlayCircle } from '@iconscout/react-unicons'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative aspect-auto min-h-screen ">
      <div className="absolute h-full w-screen bg-banner_bg bg-no-repeat bg-cover opacity-[.1]" />
      <div className='container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-20 sm:gap-4 md:gap-4 pt-[75px] px-20 sm:px-0'>
        <div data-aos="fade-right" data-aos-duration="1000" className='content-center py-8'>
          <div className="grid gap-8 sm:gap-8">
            <div className='sm:hidden'>
              <Image decoding="async" src="/img/home/banner_coin.png" alt="logo" className="sm:w-8 sm:h-8 animate-rolating" height={100} width={100} />
            </div>
            <div className='grid gap-8'>
              <h1 className="sm:text-32 text-60 text-white font-bold capitalize sm:text-center">
                Đầu tư tiền của bạn với <span className="text-secondary">Lợi nhuận cao</span>
              </h1>
              <p className="text-text_color text-16 sm:text-center">
                Trong bối cảnh thị trường tài chính năng động, độ chính xác và hiểu biết là điều quan trọng, CB Ventures
                được thành lập để cung cấp giải pháp tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
                các sàn thương mại điện tử.
              </p>
            </div>
            <div>
              <Row className="gap-4 sm:justify-center">
                <Button className="hover:bg-secondary gap-2 p-6 group" htmlType="button" type="primary">
                  <Row>
                    <p className='text-trk text-16'>Bắt đầu</p>
                    <UilArrowRight className="text-trk group-hover:animate-spin" />
                  </Row>
                </Button>
                <Button className="p-6 text-16 bg-transparent text-secondary border-secondary" htmlType="button">
                  <UilPlayCircle className="text-secondary" />
                  Xem video
                </Button>
              </Row>
            </div>
            <div className='sm:hidden h-[200px]'></div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000"  >
          <Image decoding="async" src="/img/home/banner_img-2.png" alt="hero" className="sm:relative max-w-full h-auto" fill />
        </div>
      </div>
    </section>
  )
}
