import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'

export type VisionData = {
    title: string
    description: string
    url: string
}


export type VisionCardProps = {
    data: VisionData
}

export function VisionCard({ data }: VisionCardProps) {
    return (
        <div data-aos="fade-up" data-aos-duration="800" className="rounded-2xl drop-shadow-lg bg-gradient-to-br from-bg_color_trans to-bg_color grid gap-4 p-8 border border-transparent hover:border-primary">
            <div className="flex justify-center">
                <Card className="rounded-full w-[125px] h-[125px]">
                    <Image
                        width="96"
                        height="96"
                        src={data.url}
                        alt="icon-vision"
                    />
                </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">{data.title}</h3>
            <p className="text-center text-gray-300 text-16 normal-case">{data.description}
            </p>
        </div >
    )
}
