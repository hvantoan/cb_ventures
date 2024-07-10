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
import ImageBanner from '@/pages/landing/ImageBanner'
import PartnerRow from './PartnerRow'
import ExploreImage from './ExploreImage'
import ExploreText from './ExploreText'
import FeaturesText from './FeaturesText'
import FeaturesImage from './FeaturesImage'
import ServicesHead from './service/ServicesHead'
import ProductRoadMap from './RoadMap/ProductRoadMapHead'
import FramingIdea from './RoadMap/FramingIdea'
import FinalDesign from './RoadMap/FinalDesign'
import LaunchProject from './RoadMap/LaunchProject'
import ProductReseach from './RoadMap/ProductResearch'
import DesignFirstDraft from './RoadMap/DesignFirstDraft'
import ProjectDevelopment from './RoadMap/ProjectDevelopment'
import PricingHead from './Pricing/PricingHead'
import BasicPricing from '@/pages/landing/Pricing/BasicPricing'
import HeadAdvisers from '@/pages/landing/MeetOurAdvisers/HeadAdvisers'
import AdviserData from '@/pages/landing/MeetOurAdvisers/AdviserData'
import ProTraders from './ProTraders'
import Subscribe from '@/pages/landing/Subscribe'
import Footer from '@/pages/landing/Footer'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Trading from './components/Trading'

const Landing = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Trading />
      <div className="flex-1 h-auto pb-[30px] bg-transparent sm:w-full">
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
              <ProductRoadMap></ProductRoadMap>
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
                <ProductReseach></ProductReseach>
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
