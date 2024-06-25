import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { scales } from 'chart.js'

const PartnerRow = React.memo((column: any) => {
  return (
    <div>
      <Row className="py-[40px] lg:space-x-20 sm:space-x-0 font-bold place-content-center">
        <a className="text-secondary-hbr text-4xl pl-[0px] text-bold lg:content-center pb-[4px] sm:w-6/12 sm:text-center">coinbase</a>
        <a href="" className='sm:w-6/12'>
          <Row className='sm:place-content-center'>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
              alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
            />
            <p className="text-success-hbr text-3xl ml-[5px] content-center">Spotify</p>
          </Row>
        </a>
        <a href="" className='sm:w-6/12 sm:mt-[20px]'>
          <Row className='sm:place-content-center'>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo.png"
              alt="external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo"
            />
            <p className="text-pink text-3xl ml-[5px] content-center">Slack</p>
          </Row>
        </a>
        <a href="" className='sm:w-6/12 sm:mt-[20px]'>
          <Row className='sm:place-content-center'>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Dropbox-logos-and-brands-those-icons-flat-those-icons.png"
              alt="external-Dropbox-logos-and-brands-those-icons-flat-those-icons"
            />
            <p className="text-pink text-3xl ml-[5px] content-center">Dropbox</p>
          </Row>
        </a>
        <a className="text-pink text-4xl lg:pl-[0px] text-bold content-center sm:w-6/12 sm:mt-[20px]">
            <img src='/img/icon/webflow-icon.png' width={100} height={60} className='scale-150 sm:ml-[40px]'></img>
        </a>
        <a className="text-link text-4xl text-bold content-center pb-[4px] sm:w-6/12 sm:mt-[20px] sm:text-center">zoom</a>
      </Row>
    </div>
  )
})

export default PartnerRow
