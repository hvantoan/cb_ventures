import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'

const ImageBanner = React.memo((column: any) => {
  return (
    <div className="sm:place-content-center flex items-center justify-between">
      <img src="/img/landing/image-banner.png" alt="" />
    </div>
  )
})

export default ImageBanner
