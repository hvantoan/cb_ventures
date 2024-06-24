import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'

const ImageBanner = React.memo((column: any) => {
  return ( 
    <img src="/img/landing/image-banner.png" alt="" className='flex items-center justify-between'/>    
  )
})

export default ImageBanner