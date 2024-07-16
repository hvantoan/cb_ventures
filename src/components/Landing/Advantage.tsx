'use client'
import React from 'react'
import { Card } from 'antd'

export function Advantage() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full">
      <div className="absolute inset-0 h-full w-full bg-landing-bg1 z-[-1] " />
      <div className="container mx-auto grid 
          sm:py-4 md:py-4 py-20
        ">
        <div className='w-full'>
          <h2 className="sm:text-4xl md:text-5xl text-6xl w-full place-self-center text-center text-primary">Tầm nhìn - Nhiệm vụ</h2>
          <div className="flex justify-center">
            <p className="text-white/60 pt-5 pb-10 text-lg max-w-[700px] text-center">
              Chúng tôi đã xây dựng một hệ thống tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động trên
              các sàn thương mại điện tử.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 grid-cols-3 gap-4">
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19] border border-primary">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">An Toàn và Trải Nghiệm</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              Ra đời với tầm nhìn cung cấp các giải pháp đầu tư an toàn và trải nghiệm đa dạng trên nhiều phân khúc thị
              trường khác nhau.
            </p>
          </div>
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19]">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">Cung cấp công nghệ tiên tiến</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              Cách mạng hóa thị trường tài chính trên toàn cầu, cung cấp công nghệ tiên tiến cho trải nghiệm đầu tư mạnh
              mẽ, đa dạng và bền vững.
            </p>
          </div>
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19]">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">Chuẩn quy trình</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              Đào tạo đội ngũ Introduce Broker, Analyst, Customer Care Staff chuyên nghiệp chuẩn quy trình, vững chuyên
              môn.
            </p>
          </div>
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19]">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">An toàn minh bạch</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              Thông qua sự xuất sắc về công nghệ, dân chủ hóa các cơ hội tài chính và đảm bảo tuân thủ quy định để có
              một môi trường đầu tư an toàn, minh bạch.
            </p>
          </div>
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19]">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">Có vấn đầu tư</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              Cố vấn đầu tư, đưa ra các giải pháp và cơ hội đầu tư vượt trội trên đa dạng thị trường.
            </p>
          </div>
          <div className="rounded-2xl drop-shadow-lg grid gap-4 p-8 bg-[#0a1f19]">
            <div className="flex justify-center">
              <Card className="rounded-full w-[125px] h-[125px]">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/external-others-phat-plus/64/external-bar-charts-diagrams-flat-others-phat-plus-9.png"
                  alt="external-bar-charts-diagrams-flat-others-phat-plus-9"
                />
              </Card>
            </div>
            <h3 className="text-center text-pink text-22 capitalize">Đầu tư toàn diện</h3>
            <p className="text-center text-gray-300 text-15 normal-case">
              CT Ventures cung cấp phương pháp đầu tư toàn diện. Dễ dàng tham gia vào các phần thưởng tiềm năng của giao
              dịch với thông tin phong phú trong tầm tay bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
