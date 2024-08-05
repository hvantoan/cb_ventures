'use client'
import React from 'react'
import { RoadmapCard } from './RoadmapCard'
import type { RoadmapItem } from './RoadmapCard'
export type RoadmapProps = {
  data: RoadmapItem[]
  roadDone: number
}

export function Roadmap({ data }: RoadmapProps) {

  return (
    <div className="relative min-h-[calc(100vh-72px)] w-full pb-2">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-bg_color_trans to-bg_color " />
      <div className="container mx-auto grid gap-8 m-20">
        <div className="grid gap-8">
          <h2 className="text-54 sm:text-32 font-bold text-center text-primary">Roadmap</h2>
          <p className="text-18 text-pink text-center w-5/6 mx-auto">
            Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
            đúng các bước để đến đích của bạn.
          </p>
        </div>
        <div className='grid'>
          <div className='grid sm:gap-4'>
            {data.map((item, idx) => {
              return <RoadmapCard key={idx} isLeft={idx % 2 != 0} data={item} />
            })}
          </div>
          <div className='block'>
            <div className="h-[calc(100%-10rem)] w-[12px] sm:hidden absolute left-[calc(50%-6px)] top-[10em] ">
              <div className={`absolute bg-primary rounded w-[12px] z-10 h-[50%]`} />
              <div className="bg-success-transparent w-[12px] h-full rounded" />
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}
