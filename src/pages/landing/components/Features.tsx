'use client'
import React from 'react'
import { Card } from 'antd'

export default function Features() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-[#091d18] z-[-1] " />
      <div className='flex justify-center'>
        <div className="container min-h-screen grid sm:grid-cols-1 md:grid-cols-1 grid-cols-12  grid-flow-row-dense sm:gap-4 md:gap-4 gap-20 sm:py-4 md:py-4 py-20">
          <div className="sm:col-span-1 md:col-span-1 col-span-6 grid gap-4">
            <h1 className="text-5xl place-content-center sm:w-full sm:text-center">
              <span className="text-primary">Tính năng </span>
            </h1>
            <p className="text-white/60 text-lg place-content-center sm:w-full sm:text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
            <div className="bg-card-active shadow-card content-center p-4 rounded-lg text-left active">
              <h5 className="text-pink text-17">
                Chế tạo tỉ mỉ bằng cách sử dụng bộ công cụ, thuật toán toàn diện và sự giám sát chặt chẽ của các nhà phân
                tích giao dịch.
              </h5>
            </div>
            <div className="content-center p-4 rounded-lg text-left border-[#1a2c28] border">
              <h5 className="text-[#717d79] text-17">
                Sự kết hợp giữa công nghệ và chuyên môn này được thiết kế để tạo ra lợi nhuận hàng tháng ổn định và bền
                vững.
              </h5>
            </div>
            <div className="content-center p-4 rounded-lg text-left border-[#1a2c28] border">
              <h5 className="text-[#717d79] text-17">
                Hệ thống này không tĩnh mà là một thực thể năng động, được quản lý và cập nhật liên tục để thích ứng với
                bối cảnh tài chính không ngừng phát triển.
              </h5>
            </div>
          </div>
          <div className="sm:col-span-1 md:col-span-1 col-span-6 content-center">
            <img src="/img/landing/feature.png" alt="" className="object-fill w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
