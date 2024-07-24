'use client'
import Image from 'next/image'
import React from 'react'

export function Features() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full bg-[#091d18] z-[-1] " />
      <div className='flex justify-center'>
        <div className="container mx-auto relative grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-20
                      sm:gap-4 md:gap-4 p-20 sm:p-0 md:p-0 sm:py-8">
          <div className="grid gap-4">
            <h1 className="text-54 sm:text-center">
              <span className="text-primary font-bold">Tính năng</span>
            </h1>
            <p className="text-white/60 text-18 sm:text-center">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính năng tuyệt vời và hỗ trợ khách hàng hàng
              đầu của chúng tôi!
            </p>
            <div className="hover:bg-card-active hover:shadow-card hover:border-none content-center p-4 rounded-lg text-left border-[#1a2c28] border">
              <h5 className="text-[#717d79] hover:text-pink text-18">
                Chế tạo tỉ mỉ bằng cách sử dụng bộ công cụ, thuật toán toàn diện và sự giám sát chặt chẽ của các nhà phân
                tích giao dịch.
              </h5>
            </div>
            <div className="hover:bg-card-active hover:shadow-card hover:border-none content-center p-4 rounded-lg text-left border-[#1a2c28] border">
              <h5 className="text-[#717d79] hover:text-pink text-18">
                Sự kết hợp giữa công nghệ và chuyên môn này được thiết kế để tạo ra lợi nhuận hàng tháng ổn định và bền
                vững.
              </h5>
            </div>
            <div className="hover:bg-card-active hover:shadow-card hover:border-none content-center p-4 rounded-lg text-left border-[#1a2c28] border">
              <h5 className="text-[#717d79] hover:text-pink text-18">
                Hệ thống này không tĩnh mà là một thực thể năng động, được quản lý và cập nhật liên tục để thích ứng với
                bối cảnh tài chính không ngừng phát triển.
              </h5>
            </div>
          </div>
          <div className="content-center">
            <Image src="/img/landing/feature.png" fill alt="feature" className="object-fill relative" />
          </div>
        </div>
      </div>
    </div>
  )
}
