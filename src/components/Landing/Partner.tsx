import { Image } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Partner() {
  return (
    <section className='bg-tertiary_color'>
      <div className='partner-gradient'>
        <div className='container mx-auto px-20 sm:px-0 relative z-10'>
          <Carousel
            className='p-'
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={true}
            autoPlay
            customTransition='transform 1500ms ease-in-out'
            dotListClass=""
            infinite
            itemClass=""
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
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            ssr={true}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <a key={index} href='#' className='flex justify-center items-center   h-full w-full'>
                <Image src={`/img/home/barnd0${index + 1}-2.png`} height={48} alt='barm' />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}