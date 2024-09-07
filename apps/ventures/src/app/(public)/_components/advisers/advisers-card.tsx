import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export type Adviser = {
  img: string;
  name: string;
  designation: string;
  url?: string;
};

export type AdviserCardProps = {
  adviser: Adviser;
};

export function AdviserCard({ adviser }: AdviserCardProps) {
  return (
    <div
      className='rounded-16 group relative w-full transition duration-150 ease-out'
      data-aos='fade-up'
      data-aos-duration='1200'
    >
      <div className=' bg-wh_color rounded-16 relative h-auto'>
        <Image
          src={adviser.img}
          alt={adviser.name}
          className='rounded-16 h-auto object-contain'
          height={592}
          width={450}
        />
        <div className='absolute bottom-0 z-10 w-full p-4'>
          <div className='bg-bg_adviser rounded-10 bottom-0 px-4 py-2 drop-shadow-sm'>
            <Typography
              typography='h3'
              className='text-20 group-hover:text-secondary select-none text-center font-semibold text-white'
            >
              {adviser.name}
            </Typography>
            <p className='text-14 text-subtext m-0 mt-1 select-none text-center'>{adviser.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
