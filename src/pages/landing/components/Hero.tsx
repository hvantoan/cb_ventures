'use client'
import React from 'react'
import { Button } from 'antd'
import { UilArrowUpRight, UilPlayCircle } from '@iconscout/react-unicons'

export default function Hero({}) {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full " />
      <div className="grid grid-cols-2 md:grid-cols-1 grid-flow-row-dense gap-20 min-h-[calc(100vh-72px)] p-20 bg-[#00150f]">
        <div>
          <div className="grid gap-4">
            <h1 className="text-6xl">
              Invest Your Money With <span className="text-primary">Higher Return</span>
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit a et soluta repudiandae quisquam
              nihil, nobis, aliquam magnam deleniti quidem natus eaque accusamus delectus eveniet vero maxime. Vitae,
              soluta. Corporis quidem minus excepturi, impedit iure veniam illo nihil in iste id est blanditiis, rerum
              repudiandae. Quae temporibus aspernatur necessitatibus iste sit amet vitae architecto nisi numquam,
              praesentium odio est? Suscipit incidunt praesentium culpa placeat ipsum porro, id nemo temporibus at
              dolorem adipisci consectetur? Minus, mollitia laborum animi, expedita minima, nemo amet cumque veniam vel
              eveniet saepe? Placeat, voluptates facilis! Omnis, quis. Perspiciatis, voluptas. Dolorum eaque, id,
              facilis sapiente saepe culpa officiis laudantium accusantium nemo ut tenetur animi earum velit error unde
              facere distinctio veritatis possimus vitae nulla? Commodi, ad.
            </p>
            <div>
              <div className="grid grid-cols-2 float-start gap-4">
                <Button className="h-16 p-4" htmlType="button" type="primary">
                  <p className="text-dark text-xl">Get Started</p>
                  <UilArrowUpRight className="text-black" />
                </Button>
                <Button className="h-16 p-4 bg-body text-pink text-xl" htmlType="button">
                  <UilPlayCircle className="text-white" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-full">
            <img src="/img/landing/image-banner.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
