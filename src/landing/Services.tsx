import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { scales } from 'chart.js'
import SmartTrading from './service/SmartTrading'

const Services = React.memo((column: any) => {
  return (
    <div className='p-0'>
      <Row >
        <h1 className="text-5xl w-full place-self-center text-center">
          <span className="text-primary">Services </span>
          We Offer
        </h1>
      </Row>
      <Row className='place-content-center'>
        <p className="text-white/60 pt-5 pb-10 text-lg w-[700px] text-center">
          Unlock the full potential of our product with our amazing features and top-notch customer support!
        </p>
      </Row>
    </div>
  )
})
export default Services
