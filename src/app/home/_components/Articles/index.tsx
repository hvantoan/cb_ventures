"use client";
import ArticlesCard, { Article } from "./ArticlesCard";
import { PrimaryButton } from "../Button/PrimaryButton";

export type ArticlesProps = {
  data: Article[];
};

export function Articles({ data }: ArticlesProps) {
  return (
    <div className="min-h-[calc(100vh - 72px)] relative w-full">
      <div className="absolute inset-0 z-[-1] h-full w-full" />
      <div className="container mx-auto grid px-20 py-20 md:px-0 md:py-4 sm:px-0 sm:py-4">
        <div className="w-full">
          <h2 className="w-full place-self-center text-center text-54 text-white sm:text-32">
            Bài viết cho <span className="text-primary">Pro Trader</span>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-[700px] pb-10 pt-5 text-center text-lg text-white/60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              veritatis facere blanditiis id provident facilis quisquam corrupti
              modi ratione iure pariatur deserunt nostrum temporibus itaque illo
              sapiente quos voluptatum. Laboriosam?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {data
            ?.slice(0, 3)
            .map((art, idx) => (
              <ArticlesCard key={idx} item={art} theme="style-2" />
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
