import React from 'react'
import { Button, Card } from 'antd' // Import the Card component from Ant Design

import data from '../../demoData/friends.json'

const AdviserData = React.memo(() => {
  const ListAdviser = data

  return (
    <div>
      <div className="flex flex-wrap gap-6 place-content-center">
        {ListAdviser.map((adviser) => (
          <Card key={adviser.key} className="w-[300px] card-no-padding">
            <img src={adviser.img} alt={adviser.name} className="absolute w-full h-full bottom-0 left-0 rounded-lg" />
            <Card className=" w-full bg-darkHard place-content-center mt-[250px]">
              <h5 className="text-center">{adviser.name}</h5>
              <p className="text-center text-pink mt-[10px]">{adviser.designation}</p>
            </Card>
          </Card>
        ))}
      </div>
      <div className='flex place-content-center mt-[20px]'>
        <Button className="h-150 px-[20px] py-[20px] text-base/[20px]" htmlType="button" type="primary">
          <p className="text-dark text-base/[22px]">View More</p>
        </Button>
      </div>
    </div>
  )
})

export default AdviserData
