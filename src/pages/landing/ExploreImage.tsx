import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
const ExploreImage = React.memo((column: any) => {
  return (
    <div>
      <Card bordered={false} className="absolute bg-pink-transparent px-[10px] left-75">
        <h1 className="text-primary text-4xl ">10 Years</h1>
        <p className="text-2xl  text-pink mt-[5px]">Trading Experience</p>
      </Card>
      <img src="/img/landing/explore-bg.png" alt="" className="flex place-content-center w-full" />
      <Card bordered={false} className="absolute bg-pink-transparent px-[10px] right-1/4 sm:right-[20px] bottom-0">
        <h1 className="text-primary text-4xl">25K+</h1>
        <p className="text-2xl  text-pink mt-[5px]">Safistied Customer</p>
      </Card>
    </div>
  )
})
export default ExploreImage
