"use client";
import React from "react";
import { Adviser, AdviserCard } from "./AdvisersCard";
import { PrimaryButton } from "../Button/PrimaryButton";

export type AdvisersProps = {
  data: Adviser[];
};

export function Advisers({ data }: AdvisersProps) {
  return (
    <div className="min-h-[calc(100vh - 72px)] relative w-full">
      <div className="absolute inset-0 z-[-1] h-full w-full" />
      <div className="container mx-auto grid p-20 sm:px-0 sm:py-10">
        <div className="w-full">
          <h2 className="w-full place-self-center text-center text-54 text-white sm:text-32">
            Gặp <span className="text-primary">Cố Vấn</span>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-[700px] pb-10 pt-5 text-center text-18 text-white/60">
              Mở khóa toàn bộ tiềm năng của sản phẩm của chúng tôi với các tính
              năng tuyệt vời và hỗ trợ khách hàng hàng đầu của chúng tôi!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-1">
          {data.slice(0, 8).map((adviser, idx) => (
            <AdviserCard key={idx} adviser={adviser} />
          ))}
        </div>
        <div className="mt-[20px] flex place-content-center">
          <PrimaryButton>
            <p className="text-16">Xem thêm</p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
