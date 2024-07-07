import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'

const ExploreText = React.memo((column: any) => {
  return (
    <div>
      <Row className="sm:mt-[50px] sm:px-[15px] sm:place-content-center">
        <h1 className="text-5xl sm:text-center ">
          Meet
          <span className="text-primary"> Our Company </span>
          Unless Miss The Opportunity
        </h1>
        <p className="text-white/60 pt-10 pb-10 text-lg sm:text-center">
          Hey there! You dont't want to mess out on getting to know our company. We're a fun-loving group who are
          possionate about what we do. From our innovative porducts to our top-notch customer service, we're in a
          mission to make your life easier. Whather you're an entrepreneur, a mom, or just looking for something
          awesome.
        </p>
        <Button className="h-150 px-[20px] py-[20px] text-base/[20px]" htmlType="button" type="primary">
          <p className="text-dark text-base/[20px]">Explore More</p>
        </Button>
      </Row>
    </div>
  )
})
export default ExploreText
