'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

export function Partner() {
  return (
    <section className='bg-tertiary_color'>
      <div className='partner-gradient'>
        <div className='container relative z-10 mx-auto lg:px-20 '>
          <Carousel
            className='p-'
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode
            autoPlay
            customTransition='transform 1500ms ease-in-out'
            dotListClass=''
            infinite
            itemClass='px-8'
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 6,
                partialVisibilityGutter: 60
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 20
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            ssr
            shouldResetAutoplay
            sliderClass=''
            slidesToSlide={1}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <a key={index} href='/ventures/partner' className='flex h-full w-full items-center justify-center'>
                <Image
                  src={`/ventures/img/home/barnd0${index + 1}-2.png`}
                  height={64}
                  width={64}
                  alt='barm'
                  className='w-full object-contain'
                />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
