import dynamic from 'next/dynamic'
import React from 'react'
import { Row, Col, Skeleton } from 'antd'
import { PageHeaders } from '@/components/page-headers'
import SmartTrading from '@/landing/service/SmartTrading'
import SocialAssistant from '@/landing/service/SocialAssistant'
import ReporterNew from '@/landing/service/ReporterNew'
import Cryptocurrency from '@/landing/service/Cryptocurrency'
import ChangesToExchangeOrders from '@/landing/service/ChangesToExchangeOrders'
import PriceNotification from '@/landing/service/PriceNotification'

const BannerHeader = dynamic(() => import('@/landing/BannerHeader'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ImageBanner = dynamic(() => import('@/landing/ImageBanner'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const PartnerRow = dynamic(() => import('@/landing/PartnerRow'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ExploreImage = dynamic(() => import('@/landing/ExploreImage'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ExploreText = dynamic(() => import('@/landing/ExploreText'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FeaturesImage = dynamic(() => import('@/landing/FeaturesImage'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FeaturesText = dynamic(() => import('@/landing/FeaturesText'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const Services = dynamic(() => import('@/landing/Services'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})

const Landing = () => {
  return (
    <>
      <PageHeaders className="flex items-center justify-between px-8 xl:px-[15px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col" />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto xl:px-[15px] pb-[30px] bg-transparent">
        <div className="bg-landing-bg1 py-[100px]">
          <Row gutter={25} className="px-64">
            <Col xxl={12} xs={24}>
              <BannerHeader />
            </Col>
            <Col xxl={12} xs={24}>
              <ImageBanner />
            </Col>
          </Row>
        </div>
        <div className="bg-landing-bg2">
          <Row gutter={25} className="px-64">
            <Col xs={24}>
              <PartnerRow />
            </Col>
          </Row>
        </div>
        <div className="bg-landing-bg1 py-[100px]">
          <Row gutter={25} className="px-64">
            <Col xxl={12} xs={24}>
              <ExploreImage />
            </Col>
            <Col xxl={12} xs={24}>
              <ExploreText />
            </Col>
          </Row>
        </div>
        <div className="bg-landing-bg3 py-[100px] bg-full">
          <Row gutter={25} className="px-64">
            <Col xxl={8} xs={24}>
              <FeaturesText />
            </Col>
            <Col xxl={16} xs={24}>
              <FeaturesImage />
            </Col>
          </Row>
        </div>
        <div className="bg-landing-bg2 py-[100px] bg-full">
          <Row gutter={25} className="px-64 place-content-center">
            <Services />
          </Row>
        </div>
        <div className="bg-landing-bg2 py-[100px] bg-full">
          <Row gutter={25} className="px-64 grid grid-cols-3 gap-6">
            <SmartTrading></SmartTrading>
            <SocialAssistant></SocialAssistant>
            <ReporterNew></ReporterNew>
            <Cryptocurrency></Cryptocurrency>
            <ChangesToExchangeOrders></ChangesToExchangeOrders>
            <PriceNotification></PriceNotification>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Landing
