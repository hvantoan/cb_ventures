import dynamic from 'next/dynamic'
import React from 'react'
import { Row, Col, Skeleton } from 'antd'
import { PageHeaders } from '@/components/PageHeaders'
import SmartTrading from '@/pages/landing/service/SmartTrading'
import SocialAssistant from '@/pages/landing/service/SocialAssistant'
import ReporterNew from '@/pages/landing/service/ReporterNew'
import Cryptocurrency from '@/pages/landing/service/Cryptocurrency'
import ChangesToExchangeOrders from '@/pages/landing/service/ChangesToExchangeOrders'
import PriceNotification from '@/pages/landing/service/PriceNotification'
import { PageContainer } from '@ant-design/pro-layout'

const BannerHeader = dynamic(() => import('@/pages/landing/BannerHeader'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ImageBanner = dynamic(() => import('@/pages/landing/ImageBanner'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const PartnerRow = dynamic(() => import('@/pages/landing/PartnerRow'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ExploreImage = dynamic(() => import('@/pages/landing/ExploreImage'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ExploreText = dynamic(() => import('@/pages/landing/ExploreText'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FeaturesImage = dynamic(() => import('@/pages/landing/FeaturesImage'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FeaturesText = dynamic(() => import('@/pages/landing/FeaturesText'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ServicesHead = dynamic(() => import('@/pages/landing/service/ServicesHead'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ProductResearch = dynamic(() => import('@/pages/landing/RoadMap/ProductResearch'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ProductRoadMapHead = dynamic(() => import('@/pages/landing/RoadMap/ProductRoadMapHead'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FramingIdea = dynamic(() => import('@/pages/landing/RoadMap/FramingIdea'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const FinalDesign = dynamic(() => import('@/pages/landing/RoadMap/FinalDesign'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const LaunchProject = dynamic(() => import('@/pages/landing/RoadMap/LaunchProject'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const DesignFirstDraft = dynamic(() => import('@/pages/landing/RoadMap/DesignFirstDraft'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ProjectDevelopment = dynamic(() => import('@/pages/landing/RoadMap/ProjectDevelopment'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const PricingHead = dynamic(() => import('@/pages/landing/Pricing/PricingHead'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const BasicPricing = dynamic(() => import('@/pages/landing/Pricing/BasicPricing'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const PremiunPricing = dynamic(() => import('@/pages/landing/Pricing/PremiunPricing'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const StandardPricing = dynamic(() => import('@/pages/landing/Pricing/StandardPricing'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const HeadAdvisers = dynamic(() => import('@/pages/landing/MeetOurAdvisers/HeadAdvisers'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const AdviserData = dynamic(() => import('@/pages/landing/MeetOurAdvisers/AdviserData'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const ProTraders = dynamic(() => import('@/pages/landing/ProTraders'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const Subscribe = dynamic(() => import('@/pages/landing/Subscribe'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})

const Footer = dynamic(() => import('@/pages/landing/Footer'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
})
const Landing = () => {
  return (
    <>
      <PageHeaders className="flex items-center justify-between px-8 5xl:px-[15px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col" />
      <div className="flex-1 h-auto 5xl:px-[15px] pb-[30px] bg-transparent sm:w-full">
        <div className="bg-landing-bg1 5xl:py-[100px]">
          <PageContainer>
            <Row gutter={25} className="5xl:px-64 sm:px-0">
              <Col xxl={12} xs={24}>
                <BannerHeader />
              </Col>
              <Col xxl={12} xs={24}>
                <ImageBanner />
              </Col>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-landing-bg2">
          <PageContainer>
            <Row gutter={25} className="5xl:px-64 sm:px-0">
              <Col xs={24}>
                <PartnerRow />
              </Col>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 py-[100px]">
          <PageContainer>
            <Row gutter={25} className="5xl:px-64">
              <Col xxl={12} xs={24} sm={24}>
                <ExploreImage />
              </Col>
              <Col xxl={12} xs={24} sm={24}>
                <ExploreText />
              </Col>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-success-transparent py-[100px] bg-full">
          <PageContainer>
            <Row gutter={25} className="5xl:px-64">
              <Col xxl={8} xs={24} sm={24}>
                <FeaturesText />
              </Col>
              <Col xxl={16} xs={24} sm={24}>
                <FeaturesImage />
              </Col>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 py-[100px] bg-full">
          <PageContainer>
            <Row gutter={25} className="px-64 place-content-center">
              <ServicesHead />
            </Row>
            <Row gutter={25} className="px-64 grid grid-cols-3 gap-6">
              <SmartTrading></SmartTrading>
              <SocialAssistant></SocialAssistant>
              <ReporterNew></ReporterNew>
              <Cryptocurrency></Cryptocurrency>
              <ChangesToExchangeOrders></ChangesToExchangeOrders>
              <PriceNotification></PriceNotification>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 py-[100px] bg-full">
          <PageContainer>
            <Row gutter={25} className="px-64 place-content-center">
              <ProductRoadMapHead></ProductRoadMapHead>
            </Row>
            <Row gutter={25} className="px-64">
              <Col xxl={11} sm={11} xs={11} className="pt-[170px]">
                <FramingIdea></FramingIdea>
                <FinalDesign></FinalDesign>
                <LaunchProject></LaunchProject>
              </Col>
              <Col xxl={2} sm={11} xs={2}>
                <div className="flex justify-center w-full">
                  <div className="h-[1170px] bg-success-transparent w-[12px] rounded">
                    <div className="w-full h-[800px] bg-primary rounded"></div>
                  </div>
                </div>
              </Col>
              <Col xxl={11} sm={11} xs={11}>
                <ProductResearch></ProductResearch>
                <DesignFirstDraft></DesignFirstDraft>
                <ProjectDevelopment></ProjectDevelopment>
              </Col>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-success-transparent py-[100px] bg-full">
          <PageContainer>
            <Row gutter={25} className="px-64 place-content-center">
              <PricingHead></PricingHead>
            </Row>
            <Row gutter={25} className="px-64 flex flex-row place-content-center">
              <div className="w-[350px] my-[40px] hover:my-[20px]">
                <BasicPricing></BasicPricing>
              </div>
              <div className="w-[350px] my-[40px] hover:my-[20px] ml-[30px]">
                <BasicPricing></BasicPricing>
              </div>
              <div className="w-[350px] my-[40px] hover:my-[20px] ml-[30px]">
                <BasicPricing></BasicPricing>
              </div>
            </Row>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 py-[100px] bg-full">
          <PageContainer>
            <Row gutter={25} className="px-64 place-content-center">
              <HeadAdvisers></HeadAdvisers>
            </Row>
            <div className="px-64 place-content-center">
              <AdviserData></AdviserData>
            </div>
          </PageContainer>
        </div>
        <div className="bg-success-transparent py-[100px] bg-full">
          <PageContainer>
            <div className="px-64 place-content-center">
              <ProTraders></ProTraders>
            </div>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 py-[100px] bg-full">
          <PageContainer>
            <div className="flex flex-row px-64 place-content-center ">
              <Subscribe></Subscribe>
            </div>
          </PageContainer>
        </div>
        <div className="bg-landing-bg1 bg-full">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Landing
