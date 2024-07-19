import Image from 'next/image';
import React from 'react';

function SampleCardThree({ item }: any) {
  const { content, title, img } = item;
  return (
    <figure className="mb-0 bg-white dark:bg-white/10 rounded-10 p-[25px] text-center">
      <Image className="inline-block" src={`/${img}`} alt="" fill />
      <figcaption>
        <h2 className="mb-[10px] mt-[18px] text-[23px] font-semibold text-dark dark:text-white/[.87]">{title}</h2>
        <p className="leading-[1.79] mb-[15px] text-theme-gray dark:text-white/60">{content}</p>
      </figcaption>
    </figure>
  );
}


export default SampleCardThree;
