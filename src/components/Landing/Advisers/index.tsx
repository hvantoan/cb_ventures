'use client'
import React from 'react'
import data from '@/demoData/friends.json'
import { Button, Card } from 'antd'
import { AdviserCard } from './AdvisersCard'
export function Advisers() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full bg-landing-bg1 z-[-1] " />
      <div className="container mx-auto grid sm:py-4 md:py-4 py-20">
        <div className='w-full'>
          <h2 className="text-5xl w-full place-self-center text-center">Gặp <span className='text-primary'>Cố Vấn</span></h2>
          <div className="flex justify-center">
            <p className="text-white/60 pt-5 pb-10 text-lg max-w-[700px] text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng đầu của chúng tôi!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 place-content-center">
          {data.slice(0, 8).map((adviser, idx) => <AdviserCard key={idx} adviser={adviser} />)}
        </div>
        <div className="flex place-content-center mt-[20px]">
          <Button className="h-150 px-[20px] py-[20px] text-base/[20px]" htmlType="button" type="primary">
            <p className="text-dark text-base/[22px]">View More</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
