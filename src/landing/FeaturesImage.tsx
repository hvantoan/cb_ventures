import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { scales } from 'chart.js'

const FeaturesImage = React.memo((column: any) => {
  return (
    <div>
      <Card
        bordered={true}
        className="absolute bg-regularBGdark py-[10px] border-slate-500 border-2 right-10 top-1/4 w-6/12 rounded-bl-[85px] rounded-br-[40px] rounded-tr-[40px]"
      >
        <Row className="place-content-center">
          <Col xxl={8} xs={24}>
            <img className='h-[100px]' src="/img/landing/features-pie-chart.png" />
          </Col>
          <Col xxl={12} xs={24}>
            <p className="text-2xl text-pink mt-[5px] h-full place-content-center pb-[5px]"> Interest Rate For Loan</p>
          </Col>
        </Row>
      </Card>
      <Card
        bordered={true}
        className="absolute bg-regularBGdark py-[10px] border-slate-500 border-2 left-10 bottom-10 w-6/12 rounded-tr-[85px] rounded-bl-[40px] rounded-tl-[40px]"
      >
        <Row className="place-content-center">
          <Col xxl={8} xs={24}>
            <span className="text-primary text-5xl p-0 ">10M </span>
          </Col>
          <Col xxl={12} xs={24}>
            <p className="text-2xl text-pink mt-[5px] h-full place-content-center pb-[5px]"> Available For Loan</p>
          </Col>
        </Row>
      </Card>
      <img src="/img/landing/explore-bg.png" alt="" className="flex place-content-center w-full" />
    </div>
  )
})
export default FeaturesImage
