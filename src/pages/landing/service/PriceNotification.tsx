import React from 'react'
import { Card } from 'antd'

const PriceNotification = React.memo((column: any) => {
  return (
    <div>
      <Card className="place-items-center w-full h-[420px] bg-success-transparent border-primary border-2">
        <div className="flex justify-center justify-items-center mt-[30px]">
          <Card className="rounded-full w-[125px] h-[125px]">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/64/external-trading-fintech-kmg-design-outline-color-kmg-design.png"
              alt="external-trading-fintech-kmg-design-outline-color-kmg-design"
            />
          </Card>
        </div>
        <div className="text-center mt-[28px] text-pink text-2xl">Price notification</div>
        <h6 className="text-center mt-[15px] text-deep">
          Hey boy, have heard of the new 'modules for smart trading'? I'm sure it'll level up your game.
        </h6>
      </Card>
    </div>
  )
})
export default PriceNotification
