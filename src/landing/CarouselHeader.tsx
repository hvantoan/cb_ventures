import React from 'react'
import { Row, Col, Card } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'

const CarouselHeader = React.memo((column: any) => {
  return (
    <div>
      <Row
        gutter={25}
        className="bg-[url('https://th.bing.com/th/id/OIP.NCiuHIRLXSkKq-G236XaegHaEK?w=328&h=181&c=7&r=0&o=5&pid=1.7')] flex items-left text-theme-gray dark:text-white/60 text-sm/[54px]"
      >
        <h1>Invent Your Money With Highner Return</h1>
      </Row>
    </div>
  )
})

export default CarouselHeader
