import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'

const BasicPricing = React.memo((column: any) => {
  return (
    <div>
      <Card className="place-items-center  bg-pink-transparent hover:py-[20px] hover:border-primary">
        <div className="">
          <h5>BASIC</h5>
        </div>
        <div className="mt-[28px] text-deep text-xl">
          {' '}
          <span className="text-primary text-3xl">99$/</span>Monthly
        </div>
        <hr className="h-px my-8 border-0 bg-light-extra"></hr>
        <Row>
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo.png"
            alt="external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo"
          />
          <p className="ml-[20px] text-pink text-md place-content-center">Weekly online meeting</p>
        </Row>
        <Row className="mt-[20px]">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo.png"
            alt="external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo"
          />
          <p className="ml-[20px] text-pink text-md place-content-center">Weekly online meeting</p>
        </Row>
        <Row className="mt-[20px]">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo.png"
            alt="external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo"
          />
          <p className="ml-[20px] text-pink text-md place-content-center">Weekly online meeting</p>
        </Row>
        <Row className="mt-[20px]">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo.png"
            alt="external-approved-tick-mark-button-to-choose-correct-basic-green-tal-revivo"
          />
          <p className="ml-[20px] text-pink text-md place-content-center">Weekly online meeting</p>
        </Row>
        <Button
          className="flex text-base/[20px] bg-pink-transparent text-primary w-full mt-[40px] h-[50px] border-primary hover:bg-primary hover:text-dark"
          htmlType="button"
        >
          Choose Plan
        </Button>
      </Card>
    </div>
  )
})
export default BasicPricing
