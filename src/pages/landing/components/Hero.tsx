'use client'
import React from 'react'
import { Button } from 'antd'
import { UilArrowUpRight, UilPlayCircle } from '@iconscout/react-unicons'

export default function Hero({}) {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-20 min-h-[calc(100vh-73px)] p-20">
        <div>
          <div className="grid grid-rows-5 gap-4">
            <h1 className="text-6xl">
              Invest Your Money With <span className="text-primary">Higher Return</span>
            </h1>
            <p className="text-white text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam atque obcaecati adipisci voluptatum nihil
              error. Maxime quasi sequi, dolores est exercitationem quibusdam tempore nihil sint? Maxime consectetur
              itaque corrupti ipsum.
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
          <div className="h-[400px] w-[600px]">
            <img src="/img/landing/image-banner.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
