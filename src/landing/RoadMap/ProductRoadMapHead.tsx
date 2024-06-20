import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { scales } from 'chart.js'

const ProductRoadMap = React.memo((column: any) => {
  return (
    <div className="p-0">
      <Row>
        <h1 className="text-5xl w-full place-self-center text-center">
          Product
          <span className="text-primary"> Roadmap</span>
        </h1>
      </Row>
      <Row className="place-content-center">
        <p className="text-white/60 pt-5 pb-10 text-lg w-[700px] text-center">
         Creating a product roadmap is like planning a road trip. It's all about taking the right steps to reach your destination.
        </p>
      </Row>
    </div>
  )
})
export default ProductRoadMap
