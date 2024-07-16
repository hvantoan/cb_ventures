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
        <div className="relative min-h-[calc(100vh - 72px)] w-full">
            <div className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 h-full w-full bg-pricing z-[-1]" />
            <div className="container mx-auto sm:py-4 md:py-4 py-20">
                <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-3 sm:gap-4 md:gap-4 gap-10'>
                    {data.map((pricing, idx) => <PricingCard key={idx} {...pricing} />)}
                </div>
            </div>
        </div>
    )
}
