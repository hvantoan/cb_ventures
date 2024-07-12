import React from 'react'
import { Row, Col } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
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
import Features from './components/Features'
import Advantage from './components/Advantage'
import Roadmap from './components/Roadmap/Roadmap';
import roadmapData from "@/demoData/roadmap.json"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { RoadmapItem } from './components/Roadmap/RoadmapCard'

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      Roadmaps: roadmapData.data,
      RoadDone: 3
    }
  }
}) satisfies GetServerSideProps<{
  Roadmaps: RoadmapItem[];
  RoadDone: number;
}>

const Landing = ({ Roadmaps, RoadDone }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Advantage />
      <Roadmap data={Roadmaps} roadDone={RoadDone} />
      {/* TODO: Intergate api to load pricing map */}
      <div className="flex-1 h-auto pb-[30px] bg-transparent sm:w-full">
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
    </section>
  )
}



export default Landing

