import dynamic from 'next/dynamic'
import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeaders } from '@/components/page-headers';

const CarouselHeader = dynamic(() => import('@/landing/CarouselHeader'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
});

const Landing = () => {

  return (
    <>
      <PageHeaders
        className="flex items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <CarouselHeader />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing

