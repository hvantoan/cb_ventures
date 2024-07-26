import React from 'react'
import { VisionCard, VisionData } from './VisionCard'

export type VisionsProps = {
    data: VisionData[]
}


export function Vision({ data }: VisionsProps) {
    return (
        <div className="relative min-h-[calc(100vh - 72px)] w-full">
            <div className="absolute inset-0 h-full w-full bg-pricing z-[-1] " />
            <div className="container mx-auto grid sm:py-4 sm:px-0 p-20">
                <div className='w-full'>
                    <h2 className="text-48 w-full place-self-center text-center text-primary">Tầm nhìn - Nhiệm vụ</h2>
                    <div className="flex justify-center">
                        <p className="text-white/60 pt-5 pb-10 text-lg max-w-[700px] text-center">
                            Chúng tôi đã xây dựng một hệ thống tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
                            các sàn thương mại điện tử.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 grid-cols-3 gap-4">
                    {data?.map((item, idx) => <VisionCard key={idx} data={item} />)}
                </div>
            </div>
        </div>
    )
}
