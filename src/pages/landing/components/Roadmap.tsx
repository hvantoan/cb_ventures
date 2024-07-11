'use client'
import React from 'react'

import { RoadmapCard, RoadmapItem } from './RoadmapCard';

export type RoadmapProps = {
  data: RoadmapItem[]
}

export default function Roadmap({ data }: RoadmapProps) {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full " />
      <div className="grid min-h-screen py-20 px-40 bg-landing-bg1">
        <div>
          <h2 className="text-5xl w-full place-self-center text-center text-primary">Roadmap</h2>
          <div className="flex  justify-center">
            <p className="text-white/60 pt-5 pb-10 text-lg w-[700px] text-center">
              Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
              đúng các bước để đến đích của bạn.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-12">
          <div className="col-span-5">
            {data?.map((item: RoadmapItem) => {
              return <RoadmapCard data={item} />
            }
            )}
          </div>
          <div></div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </div>
  )
}







