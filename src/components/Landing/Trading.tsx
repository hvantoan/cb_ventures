'use client'
import React from 'react'
import { Button, Image } from 'antd'

export function Trading() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full z-[-1] bg-secondary" />
      <div className="
          container mx-auto max-w-screen-min-2xl 2xl:max-w-screen-min-lg
          grid grid-cols-5 sm:grid-cols-1 md:grid-cols-1 sm:gap-4 md:gap-4 gap-20 sm:py-4 md:py-4 py-20
        ">
        <div className="sm:col-span-1 md:col-span-1 col-span-2 w-full">
          <div className="w-full h-full content-center">
            <img src="/img/landing/trading.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
        <div className="sm:col-span-1 md:col-span-1 col-span-3">
          <div className="grid gap-4">
            <h1 className="sm:text-4xl md:text-5xl text-6xl">
              Meet<span className="text-primary"> Our Company </span>
              Unless Miss The Opportunity
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis dolorum sequi, excepturi
              tenetur nesciunt ducimus vero amet vitae nemo perspiciatis tempora rem porro, asperiores culpa at quaerat
              eveniet iusto.
            </p>
            <div>
              <Button className="h-12 px-4 py-2" htmlType="button" type="primary">
                <p className="text-secondary text-xl">Explore More</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
