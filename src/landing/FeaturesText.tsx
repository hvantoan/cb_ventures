import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { scales } from 'chart.js'

const FeaturesText = React.memo((column: any) => {
  return (
    <div>
        <Row>
        <h1 className="text-5xl place-content-center sm:w-full sm:text-center">
          <span className="text-primary">Features </span>
          We Have
        </h1>
        <p className="text-white/60 pt-10 pb-10 text-lg place-content-center sm:w-full sm:text-center">
         Unlock the full potential of our product with our amazing features and top-notch customer support!
        </p>
        <Card bordered={false} className='bg-regularBGdark w-[370px] p-0 shadow-gray-50 h-[80px] sm:w-full sm:text-center'>
            <h5 className='absolute text-pink w-full p-[20px] top-0 left-0 h-full'>Lending Money For Investment Of Your New Projects</h5>
        </Card>
        <Card bordered={true} className='bg-inherit w-[370px] p-0 mt-5 border-slate-500 h-[80px] sm:w-full sm:text-center'>
            <h5 className='absolute text-deep w-full p-[20px] top-0 left-0 h-full'>Lending Money For Investment Of Your New Projects</h5>
        </Card>
        <Card bordered={true} className='bg-inherit w-[370px] p-0 mt-5 border-slate-500 h-[80px] sm:w-full sm:text-center'>
            <h5 className='absolute text-deep w-full p-[20px] top-0 left-0 h-full'>Lending Money For Investment Of Your New Projects</h5>
        </Card>
        <Card bordered={true} className='bg-inherit w-[370px] p-0 mt-5 border-slate-500 h-[80px] sm:w-full sm:text-center'>
            <h5 className='absolute text-deep w-full p-[20px] top-0 left-0 h-full'>Lending Money For Investment Of Your New Projects</h5>
        </Card>
        <Card bordered={true} className='bg-inherit w-[370px] p-0 mt-5 border-slate-500 h-[80px] sm:w-full sm:text-center'>
            <h5 className='absolute text-deep w-full p-[20px] top-0 left-0 h-full'>Lending Money For Investment Of Your New Projects</h5>
        </Card>
      </Row>
    </div>
  )})
export default FeaturesText