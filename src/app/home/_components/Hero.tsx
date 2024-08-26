"use client";
import React from "react";
import { Row } from "antd";
import { UilArrowRight, UilPlayCircle } from "@iconscout/react-unicons";
import Image from "next/image";
import { PrimaryButton, SubButton } from "./Button/PrimaryButton";

export function Hero() {
  return (
    <section className="relative aspect-auto min-h-screen">
      <div className="absolute h-full w-screen bg-banner_bg bg-cover bg-no-repeat opacity-[.1]" />
      <div className="container relative mx-auto grid grid-cols-2 gap-20 px-20 md:grid-cols-1 md:gap-4 sm:grid-cols-1 sm:gap-4 sm:px-0">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="content-center py-8"
        >
          <div className="grid gap-8 sm:gap-8">
            <div className="sm:hidden">
              <Image
                decoding="async"
                src="/img/home/banner_coin.png"
                alt="logo"
                className="animate-rolating sm:h-8 sm:w-8"
                height={100}
                width={100}
              />
            </div>
            <div className="grid gap-8">
              <h1 className="text-60 font-bold capitalize text-white sm:text-center sm:text-32">
                Đầu tư tiền của bạn với{" "}
                <span className="text-secondary">Lợi nhuận cao</span>
              </h1>
              <p className="text-16 text-subtext sm:text-center">
                Trong bối cảnh thị trường tài chính năng động, độ chính xác và
                hiểu biết là điều quan trọng, CB Ventures được thành lập để cung
                cấp giải pháp tài chính công nghệ giúp khách hàng kiếm thêm thu
                nhập thụ động trên các sàn thương mại điện tử.
              </p>
            </div>
            <div>
              <Row className="gap-4 sm:justify-center">
                <PrimaryButton>
                  <Row>
                    <p className="text-16 text-trk">Bắt đầu</p>
                    <UilArrowRight className="text-trk group-hover:animate-spin" />
                  </Row>
                </PrimaryButton>
                <SubButton>
                  <UilPlayCircle className="text-secondary" />
                  Xem video
                </SubButton>
              </Row>
            </div>
            <div className="h-[200px] sm:hidden"></div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex items-center"
        >
          <Image
            src="/img/home/banner_img-2.png"
            alt="hero"
            className="h-auto max-w-full"
            height={800}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}
