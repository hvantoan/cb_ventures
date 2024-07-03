import React, { useRef, useState } from 'react'
import { Button, Card, Col, Row } from 'antd'
import TradingMaster from '@/demoData/TradingMasterData.json'

const ProTraders = React.memo(() => {
  const [startNumber, setStartNumber] = useState(0)
  const [endNumber, setEndNumber] = useState(3)


  function next() {
    if (endNumber != TradingMaster.length) {
      if (endNumber + 3 <= TradingMaster.length) {
        setStartNumber(startNumber + 3)
        setEndNumber(endNumber + 3)
      } else {
        setEndNumber(TradingMaster.length)
        setStartNumber(startNumber + 1)
      }
    }
  }

  function previous() {
    if (startNumber != 0) {
      if (startNumber - 3 >= 0) {
        setStartNumber(startNumber - 3)
        setEndNumber(endNumber - 3)
      } else {
        setStartNumber(0)
        setEndNumber(endNumber - 1)
      }
    }  
  }

  return (
    <div>
      <Row>
        <Col xxl={12} xs={24}>
          <div>
            <h1 className="text-5xl w-full">
              <span className="text-primary">Articles </span>
              For Pro Traders
            </h1>
          </div>
          <div>
            <p className="text-white/60 pt-5 pb-10 text-lg">
              Unlock the full potential of our product with our amazing features and top-notch customer support!
            </p>
          </div>
        </Col>
        <Col xxl={12} xs={24} className="w-full">
          <div className="flex w-full justify-end">
            <button
              className="text-pink mr-[20px] rounded-full bg-regularBGdark p-[12px] hover:bg-primary"
              onClick={() => previous()}
              type="button"
            >
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/back.png" alt="back" />
            </button>
            <button
              className="text-pink  rounded-full bg-regularBGdark p-[12px] hover:bg-primary"
              onClick={() => next()}
              type="button"
            >
              <img width="30" height="30" src="https://img.icons8.com/windows/32/forward.png" alt="forward" />
            </button>
          </div>
        </Col>
      </Row>
      <div className="flex place-content-center gap-6 w-full">
        {TradingMaster.slice(startNumber, endNumber).map((data, index) => (
          <Card key={index} className=" rounded-md bg-regularDark hover:border-primary">
            <img src={data.img} alt="" className=" w-full h-full bottom-0 left-0 rounded-lg h-[200px]" />
            <div className="bg-regularDark rounded-lg w-fit mt-[15px]">
              <p className="text-primary w-full p-[7px]">{data.designation}</p>
            </div>
            <div className="mt-[20px]">
              <h2>{data.Ask}</h2>
            </div>
            <div className="mt-[10px]">
              <p className="text-deep">{data.answer}</p>
            </div>
            <div className="mt-[20px] flex">
              <img src={data.cover} alt="" className="rounded-full w-[48px]" />
              <div className="ml-[10px] content-center">
                <h6>{data.name}</h6>
                <p className="text-deep">{data.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex place-content-center mt-[20px]">
        <Button className="h-150 px-[20px] py-[20px] text-base/[20px]" htmlType="button" type="primary">
          <p className="text-dark text-base/[22px]">View More</p>
        </Button>
      </div>
    </div>
  )
})

export default ProTraders
