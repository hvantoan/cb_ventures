import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/Cards/Frame/cards-frame'
import { scales } from 'chart.js'

const FramingIdea = React.memo((column: any) => {
  return (
    <div>
      <Row className="w-full justify-end">
        <Card className=" w-[500px] bg-success-transparent p-[10px]">
          <Row className="flex">
            <h1 className="mt-[20px] text-pink text-3xl start-0">Framing Idea</h1>
            <h1 className="mt-[20px] text-primary text-4xl absolute end-0 mr-[45px]">P2</h1>
          </Row>
          <p className="mt-[35px] text-deep">
            Hey boy, have heard of the new 'modules for smart trading'? I'm sure it'll level up your game. Hey boy, have
            heard of the new 'modules for smart trading'? I'm sure it'll level up your game. Hey boy, have heard of the
            new 'modules for smart trading'? I'm sure it'll level up your game.
          </p>
        </Card>
      </Row>
    </div>
  )
})
export default FramingIdea
