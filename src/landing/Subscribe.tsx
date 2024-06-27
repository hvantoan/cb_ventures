import React from 'react'
import { Button, Card, Col, Row } from 'antd' // Import the Card component from Ant Design

const AdviserData = React.memo(() => {
  return (
    <div>
      <Card className="bg-primary rounded-lg w-[1200px]">
        <Row>
          <Col xxl={12} xs={24}>
            <div className="flex place-content-center">
              <img src="/img/landing/subscribe-icon.png" alt="" className="h-[250px]" />
            </div>
          </Col>
          <Col xxl={12} xs={24}>
            <div className="pl-[20px] sm:place-content-center">
              <h1 className="text-5xl w-full text-left sm:text-center">
                <span className="text-secondary-hbr">Subscribe </span>
                Our News
              </h1>
            </div>
            <div className="pl-[20px]">
              <p className="text-dark/60 pt-5 pb-30 pr-20 text-lg sm:text-center">
                Unlock the full potential of our product with our amazing features and top-notch customer support!
              </p>
            </div>
            <div className="pl-[20px] mt-[40px] sm:flex sm:place-content-center">
              <form className="w-full max-w-lg">
                <div className="flex items-center py-2">
                  <input
                    className="appearance-none bg-pink border-none w-full h-[55px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded-lg"
                    type="email"
                    placeholder="wtsdatho@gmail.com"
                    aria-label="Email Address"
                  />
                  <button
                    className=" bg-secondary-hbr hover:bg-secondary-hbr border-secondary-hbr hover:border-secondary-hbr text-sm border-4 text-white py-1 px-2 rounded h-[55px]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
})

export default AdviserData
