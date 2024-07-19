import React from 'react'

import type {} from '@/components/Landing'
import { Hero, Partner, Trading, Features, Roadmap, Advisers, Pricing, Articles, Vision } from '@/components/Landing'
import roadmapData from '@/data/roadmap.json'
import pricings from '@/data/pricing.json'
import articlesData from '@/data/sampleCards.json'
import visionData from '@/data/visions.json'
import friends from '@/data/friends.json'

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { Adviser, RoadmapItem, VisionData, Article, PricingCardProps } from '@/components/Landing'

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  return {
    props: {
      roadmaps: roadmapData.data,
      roadDone: 3,
      //  Pricing card
      pricings: JSON.parse(JSON.stringify(pricings)),
      articles: JSON.parse(JSON.stringify(articlesData.BlogCardData)),
      visions: visionData,
      advisers: JSON.parse(JSON.stringify(friends)),
    },
  }
}) satisfies GetServerSideProps<{
  roadmaps: RoadmapItem[]
  roadDone: number
  pricings: PricingCardProps[]
  articles: Article[]
  visions: VisionData[]
  advisers: Adviser[]
}>

const Landing = ({
  roadmaps,
  roadDone,
  pricings,
  articles,
  visions,
  advisers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className="mt-[75px] overflow-x-hidden">
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
