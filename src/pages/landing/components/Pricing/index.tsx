// 'use client'
// import React from 'react'

// // import { RoadmapCard, RoadmapItem } from './RoadmapCard';

// export type RoadmapProps = {
//     data: RoadmapItem[]
//     roadDone: number
// }


// export default function Roadmap({ data, roadDone }: RoadmapProps) {
//     const activeHeight = (roadDone - 1) * 90 + (roadDone * 18)

//     const left = data?.filter((e) => e.index % 2 === 0) ?? []
//     const right = data?.filter((e) => e.index % 2 !== 0) ?? []

//     return (
//         <div className="relative min-h-[calc(100vh - 72px)] w-full">
//             <div className="absolute inset-0 h-full w-full bg-[#0b1f1a] z-[-1] " /> // TODO: Uncomment this line
//             <div className='flex justify-center'>
//                 <div className="container justify-center grid min-h-screen p-20">
//                     <div>
//                         <h2 className="text-5xl w-full place-self-center text-center text-primary">Roadmap</h2>
//                         <div className="flex justify-center">
//                             <p className="text-white/60 pt-5 pb-10 text-lg w-[700px] text-center ">
//                                 Tạo ra một lộ trình sản phẩm giống như lên kế hoạch cho một chuyến đi đường.Đó là tất cả về việc thực hiện
//                                 đúng các bước để đến đích của bạn.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-12">
//                         <div className="col-span-5 grid gap-10">
//                             <div className="h-[70px]" />
//                             {left.map((item: RoadmapItem) => {
//                                 return <RoadmapCard isLeft={false} data={item} />
//                             })}
//                             {data.length % 2 !== 0 && <div className="h-[70px]" />}
//                         </div>
//                         <div className="flex justify-center w-full col-span-2">
//                             <div className="h-full w-[12px] py-[90px]">
//                                 <div className={`absolute bg-primary rounded w-[12px] z-10`} style={{
//                                     height: `${activeHeight}px`
//                                 }} />
//                                 <div className="bg-success-transparent w-[12px] h-full rounded" />
//                             </div>
//                         </div>
//                         <div className="col-span-5 grid gap-10">
//                             {right.map((item: RoadmapItem) => {
//                                 return <RoadmapCard isLeft data={item} />
//                             })
//                             }
//                             {data.length % 2 === 0 && <div className="h-[70px]" />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
