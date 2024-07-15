import React from 'react'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Trading from './components/Trading'
import Features from './components/Features'
import Advantage from './components/Advantage'
import Roadmap from './components/Roadmap';
import roadmapData from "@/demoData/roadmap.json"
import pricings from "@/demoData/pricing.json"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { RoadmapItem } from './components/Roadmap/RoadmapCard'
import { PageContainer } from '@ant-design/pro-layout'
import { Row } from 'antd'
import BasicPricing from './Pricing/BasicPricing'
import Pricing from './components/Pricing'
import { PricingCardProps } from './components/Pricing/PricingCard'
import HeadAdvisers from './MeetOurAdvisers/HeadAdvisers'
import AdviserData from './MeetOurAdvisers/AdviserData'
import ProTraders from './ProTraders'
import Subscribe from './Subscribe'
import Footer from './Footer'

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      Roadmaps: roadmapData.data,
      RoadDone: 3,
      //  Pricing card
      Pricings: JSON.parse(JSON.stringify(pricings))
    }
  }
}) satisfies GetServerSideProps<{
  Roadmaps: RoadmapItem[];
  RoadDone: number;
  Pricings: PricingCardProps[];
}>

const Landing = ({ Roadmaps, RoadDone, Pricings }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Advantage />
      <Roadmap data={Roadmaps} roadDone={RoadDone} />
      <Pricing data={Pricings} />
      {/* TODO: Intergate api to load pricing map */}
      {/* <div className="flex-1 h-auto pb-[30px] bg-transparent sm:w-full">
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
      </div> */}
    </section>
  )
}



export default Landing

