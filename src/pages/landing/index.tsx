import React from 'react'
import { Hero, Partner, Trading, Features, Advantage, Roadmap, Advisers, Pricing, PricingCardProps, Articles, Article } from '@/components/Landing'
import roadmapData from "@/demoData/roadmap.json"
import pricings from "@/demoData/pricing.json"
import articlesData from "@/demoData/sampleCards.json"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { RoadmapItem } from '@/components/Landing';

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      roadmaps: roadmapData.data,
      roadDone: 3,
      //  Pricing card
      pricings: JSON.parse(JSON.stringify(pricings)),
      articles: JSON.parse(JSON.stringify(articlesData.BlogCardData))
    }
  }
}) satisfies GetServerSideProps<{
  roadmaps: RoadmapItem[];
  roadDone: number;
  pricings: PricingCardProps[];
  articles: Article[];
}>

const Landing = ({ roadmaps, roadDone, pricings, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Advantage />
      <Roadmap data={roadmaps} roadDone={roadDone} />
      <Pricing data={pricings} />
      <Advisers />
      <Articles data={articles} />
      {/* <Footer /> */}
    </section>
  )
}
export default Landing




