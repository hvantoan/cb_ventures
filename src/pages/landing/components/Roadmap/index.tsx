'use client'
import React from 'react'

import { RoadmapCard, RoadmapItem } from './RoadmapCard';

export type RoadmapProps = {
  data: RoadmapItem[]
  roadDone: number
}


export default function Roadmap({ data, roadDone }: RoadmapProps) {
  var isMobile = window.innerWidth < 768
  const activeHeight = isMobile ? (roadDone) * 180 - (170 - (roadDone - 1) * 40) : (roadDone - 1) * 90 + (roadDone * 18)

  const left = data?.filter((e) => !isMobile && e.index % 2 === 0) ?? []
  const right = data?.filter((e) => isMobile || e.index % 2 !== 0) ?? []

  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full bg-[#0b1f1a] z-[-1] " />
      <div className='flex justify-center'>
        <div className="container justify-center grid min-h-screen sm:py-4 md:py-4 py-20">
          <div>
            <h2 className="text-5xl w-full place-self-center text-center text-primary">Roadmap</h2>
            <div className="flex justify-center">
              <p className="text-white/60 pt-5 pb-10 text-lg text-center ">
                Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
                đúng các bước để đến đích của bạn.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-12 md:grid-cols-12 grid-cols-12 sm:gap-4 md:gap-4">
            {!isMobile && <div className="col-span-5 grid gap-10">
              <div className="h-[70px]" />
              {left.map((item, idx) => {
                return <RoadmapCard key={idx} isLeft={false} data={item} />
              })}
              {data.length % 2 !== 0 && <div className="h-[70px]" />}
            </div>}
            <div className="flex justify-center w-full sm:col-span-2 md:col-span-2 col-span-2">
              <div className="h-full w-[12px] py-[90px]">
                <div className={`absolute bg-primary rounded w-[12px] z-10`} style={{
                  height: `${activeHeight}px`
                }} />
                <div className="bg-success-transparent w-[12px] h-full rounded" />
              </div>
            </div>
            <div className="sm:col-span-10 md:col-span-10 col-span-5 grid gap-10">
              {right.map((item, idx) => {
                return <RoadmapCard key={idx} isLeft data={item} />
              })}
              {data.length % 2 === 0 && !isMobile && <div className="h-[70px]" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
