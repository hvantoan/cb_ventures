import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/Cards/Frame/CardsFrame'
import { scales } from 'chart.js'

const SocialAssistant = React.memo((column: any) => {
  return (
    <div>
      <Card className="place-items-center w-full h-[420px] bg-success-transparent border-primary border-2">
        <div className="flex justify-center justify-items-center mt-[30px]">
          <Card className="rounded-full w-[125px] h-[125px]">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/ultraviolet/80/candle-sticks.png"
              alt="candle-sticks"
            />
          </Card>
        </div>
        <div className="text-center mt-[28px] text-pink text-2xl">Social Assistant That Is Flexible</div>
        <h6 className="text-center mt-[15px] text-deep">
          Hey boy, have heard of the new 'modules for smart trading'? I'm sure it'll level up your game.
        </h6>
      </Card>
    </div>
  )
})
export default SocialAssistant
