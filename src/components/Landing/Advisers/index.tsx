'use client'
import React from 'react'
import { Button } from 'antd'
import { Adviser, AdviserCard } from './AdvisersCard'

export type AdvisersProps = {
  data: Adviser[]
}

export function Advisers({ data }: AdvisersProps) {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full z-[-1] " />
      <div className="container mx-auto grid p-20 sm:px-0 sm:py-10">
        <div className='w-full'>
          <h2 className="w-full place-self-center text-center text-54 sm:text-32">Gặp <span className='text-primary'>Cố Vấn</span></h2>
          <div className="flex justify-center">
            <p className="text-white/60 pt-5 pb-10 text-18  max-w-[700px] text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng đầu của chúng tôi!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-8">
          {data.slice(0, 8).map((adviser, idx) => <AdviserCard key={idx} adviser={adviser} />)}
        </div>
        <div className="flex place-content-center mt-[20px] ">
          <Button className="px-6 py-5 text-16 text-black bg-secondary border-secondary" htmlType="button">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  )
}
