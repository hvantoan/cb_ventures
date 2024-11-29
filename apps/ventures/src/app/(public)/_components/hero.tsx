'use client';

import BannerCoinImage from '@hvantoan/ui/assets/images/banner_coin.png';
import BannerImage from '@hvantoan/ui/assets/images/banner_img-2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Button, Container, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

  return (
    <section className='relative aspect-auto min-h-screen'>
      <div className='bg-banner_bg absolute h-full w-screen bg-cover bg-no-repeat opacity-[.1]' />
      <Container className='relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20'>
        <div data-aos='fade-right' data-aos-duration='1000' className='content-center py-8'>
          <div className='grid gap-4'>
            <div className='lg:visible'>
              <Image
                decoding='async'
                src={BannerCoinImage}
                alt='logo'
                className='animate-rolating max-sm:h-4 max-sm:w-4'
                height={70}
                width={70}
              />
            </div>
            <div className='grid'>
              <h1 className='lg:text-54 text-32 mt-0 text-center font-bold capitalize text-white lg:text-left'>
                Đầu tư tiền của bạn với <span className='text-h_secondary'>Lợi nhuận cao</span>
              </h1>
              <p className='text-16 text-subtext m-0 text-center lg:text-left'>
                Trong bối cảnh thị trường tài chính năng động, độ chính xác và hiểu biết là điều quan trọng, CB Ventures
                được thành lập để cung cấp giải pháp tài chính công nghệ giúp khách hàng kiếm thêm thu nhập thụ động
                trên các sàn thương mại điện tử.
              </p>
            </div>
            <div>
              <Stack direction='row' gap={2} className='max-sm:justify-center'>
                <Button onClick={() => router.push('/pricing')} color='primary'>
                  <Stack direction='row' alignItems='center' gap={1}>
                    <p className='text-16 text-trk m-0'>Bắt đầu</p>
                    <ArrowForwardIcon className='text-trk group-hover:animate-spin' />
                  </Stack>
                </Button>
                <Button variant='outlined' color='primary'>
                  <Stack direction='row' alignItems='center' gap={1}>
                    <PlayCircleOutlineIcon />
                    <p className='text-16 m-0 text-white'>Xem video</p>
                  </Stack>
                </Button>
              </Stack>
            </div>
            <div className='h-[200px] max-sm:hidden' />
          </div>
        </div>
        <div data-aos='fade-left' data-aos-duration='1000' className='flex items-center'>
          <Image src={BannerImage} alt='hero' className='h-auto max-w-full' height={800} width={800} />
        </div>
      </Container>
    </section>
  );
}
