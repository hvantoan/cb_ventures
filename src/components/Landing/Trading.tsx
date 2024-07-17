'use client'
import React from 'react'
import { Button, Image } from 'antd'

export function Trading() {
  return (
    <section className="relative w-full">
      <div className="absolute h-full w-full bg-[#00150f] z-[-1]" />
      <div className='container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-5 gap-20 sm:gap-4 md:gap-4 p-20 sm:p-0 md:p-0 sm:py-8'>
        <div className='col-span-2'>
          <div>
            <img src="/img/landing/trading.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
        <div className='col-span-3 content-center py-8'>
          <div className="grid gap-16 sm:gap-8">
            <div className='grid gap-12'>
              <h1 className="text-54 font-bold capitalize sm:text-center">
                Meet<span className="text-primary"> Our Company </span>
                Unless Miss The Opportunity
              </h1>
              <p className="text-white text-18 sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis dolorum sequi, excepturi
                tenetur nesciunt ducimus vero amet vitae nemo perspiciatis tempora rem porro, asperiores culpa at quaerat
                eveniet iusto.
              </p>
            </div>
            <div>
              <div className="sm:flex sm:justify-center">
                <Button className="h-12 p-4" htmlType="button" type="primary">
                  <p className="text-secondary text-20">Explore More</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
