'use client'
import React from 'react'
import type { PricingCardProps } from './PricingCard'
import { PricingCard } from './PricingCard'

export type PricingProps = {
    data: PricingCardProps[]
}


export function Pricing({ data }: PricingProps) {
    //TODO: Uncomment this line
    return (
        <div className="relative min-h-[calc(100vh-72px)] w-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-bg_color_trans to-bg_color " />
            <div className="container mx-auto grid gap-8 sm:py-4 md:py-4 sm:px-0 p-20">
                <div className="grid gap-8">
                    <h2 className="text-54 sm:text-32 font-bold text-center text-white">
                        Kế hoạch
                        <span className='text-primary'> Pricings </span>
                        của chúng tôi</h2>
                    <p className="text-18 text-pink text-center w-5/6 mx-auto">
                        Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
                        đúng các bước để đến đích của bạn.
                    </p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-3 sm:gap-4 md:gap-4 gap-10'>
                    {data.map((pricing, idx) => <PricingCard key={idx} {...pricing} />)}
                </div>
            </div>
        </div>
    )
}
