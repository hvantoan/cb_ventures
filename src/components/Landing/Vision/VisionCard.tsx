import { Card } from 'antd'
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
        <div className="rounded-2xl drop-shadow-lg bg-gradient-to-r from-[#0b1f1a] to-[#132924] grid gap-4 p-8 hover:border border-primary">
            <div className="flex justify-center">
                <Card className="rounded-full w-[125px] h-[125px]">
                    <img
                        width="96"
                        height="96"
                        src={data.url}
                        alt="icon-vision"
                    />
                </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">{data.title}</h3>
            <p className="text-center text-gray-300 text-15 normal-case">{data.description}
            </p>
        </div >
    )
}
