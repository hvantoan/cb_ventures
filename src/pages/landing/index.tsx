import React from 'react'
import { Hero, Partner, Trading, Features, Roadmap, Advisers, Pricing, PricingCardProps, Articles, Article, Vision, Footer } from '@/components/Landing'
import roadmapData from "@/demoData/roadmap.json"
import pricings from "@/demoData/pricing.json"
import articlesData from "@/demoData/sampleCards.json"
import visionData from "@/demoData/visions.json"
import friends from "@/demoData/friends.json"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Adviser, RoadmapItem, VisionData } from '@/components/Landing';

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      roadmaps: roadmapData.data,
      roadDone: 3,
      //  Pricing card
      pricings: JSON.parse(JSON.stringify(pricings)),
      articles: JSON.parse(JSON.stringify(articlesData.BlogCardData)),
      visions: visionData,
      advisers: JSON.parse(JSON.stringify(friends))
    }
  }
}) satisfies GetServerSideProps<{
  roadmaps: RoadmapItem[];
  roadDone: number;
  pricings: PricingCardProps[];
  articles: Article[];
  visions: VisionData[];
  advisers: Adviser[]
}>

const Landing = ({ roadmaps, roadDone, pricings, articles, visions, advisers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className='mt-[75px] overflow-x-hidden'>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Vision data={visions} />
      <Roadmap data={roadmaps} roadDone={roadDone} />
      <Pricing data={pricings} />
      <Advisers data={advisers} />
      <Articles data={articles} />
    </main>
  )
}
export default Landing




