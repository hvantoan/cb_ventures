import React from 'react'
import { Hero, Partner, Trading, Features, Roadmap, Advisers, Pricing, PricingCardProps, Articles, Article, Vision } from '@/components/Landing'
import roadmapData from "@/demoData/roadmap.json"
import pricings from "@/demoData/pricing.json"
import articlesData from "@/demoData/sampleCards.json"
import visionData from "@/demoData/visions.json"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { RoadmapItem, VisionData } from '@/components/Landing';

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      roadmaps: roadmapData.data,
      roadDone: 3,
      //  Pricing card
      pricings: JSON.parse(JSON.stringify(pricings)),
      articles: JSON.parse(JSON.stringify(articlesData.BlogCardData)),
      visions: visionData,
    }
  }
}) satisfies GetServerSideProps<{
  roadmaps: RoadmapItem[];
  roadDone: number;
  pricings: PricingCardProps[];
  articles: Article[];
  visions: VisionData[];
}>

const Landing = ({ roadmaps, roadDone, pricings, articles, visions }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className='mt-[75px] overflow-x-hidden'>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Vision data={visions} />
      <Roadmap data={roadmaps} roadDone={roadDone} />
      <Pricing data={pricings} />
      <Advisers />
      <Articles data={articles} />
      {/* <Footer /> */}
    </main>
  )
}
export default Landing




