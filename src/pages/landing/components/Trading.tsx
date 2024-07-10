'use client'
import React from 'react'
import { Button } from 'antd'
import { UilArrowUpRight } from '@iconscout/react-unicons'

export default function Trading() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full " />
      <div className="grid grid-cols-10 md:grid-cols-1 grid-flow-row-dense gap-20 min-h-[calc(100vh-72px)] p-20 bg-secondary">
        <div className="col-span-4">
          <div className="w-full h-full">
            <img src="/img/landing/trading.png" alt="hero" className="object-contain w-full" />
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid gap-4">
            <h1 className="text-6xl">
              Meet<span className="text-primary"> Our Company </span>
              Unless Miss The Opportunity
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis dolorum sequi, excepturi
              tenetur nesciunt ducimus vero amet vitae nemo perspiciatis tempora rem porro, asperiores culpa at quaerat
              eveniet iusto. Assumenda cupiditate quos reiciendis debitis cumque minima ipsa consequatur veniam dolore
              quidem libero ad molestias iusto a quod voluptates totam, magni vel dignissimos sequi? Ex repellendus modi
              earum nulla. Porro. Dolor eius sint quos porro in est, repellendus beatae omnis animi dicta temporibus
              exercitationem sunt nisi asperiores consequatur a doloribus. Provident, tempora illum. Deleniti, veniam
              optio. Tempore quis aliquid inventore! Ad aperiam et aliquid voluptatum! Odit, impedit reiciendis dicta
              numquam rerum, qui aut eveniet exercitationem soluta dignissimos iure et ratione ipsa odio ipsum, saepe
              hic? Quis culpa quaerat dolore cumque.`
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
