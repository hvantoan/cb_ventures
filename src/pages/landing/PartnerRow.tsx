import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/Cards/Frame/cards-frame'
import { scales } from 'chart.js'

const PartnerRow = React.memo((column: any) => {
  return (
    <div>
      <Row className="py-[40px] 5xl:space-x-20  font-bold place-content-center">
        <a className="text-secondary-hbr text-4xl pl-[0px] text-bold 5xl:content-center pb-[4px]">coinbase</a>
        <a href="">
          <Row>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
              alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
            />
            <p className="text-success-hbr text-3xl ml-[5px] content-center">Spotify</p>
          </Row>
        </a>
        <a href="">
          <Row>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo.png"
              alt="external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo"
            />
            <p className="text-pink text-3xl ml-[5px] content-center">Slack</p>
          </Row>
        </a>
        <a href="">
          <Row>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Dropbox-logos-and-brands-those-icons-flat-those-icons.png"
              alt="external-Dropbox-logos-and-brands-those-icons-flat-those-icons"
            />
            <p className="text-pink text-3xl ml-[5px] content-center">Dropbox</p>
          </Row>
        </a>
        <a className="text-pink text-4xl 5xl:pl-[0px] text-bold content-center">
          <img src="/img/icon/webflow-icon.png" width={100} height={60} className="scale-150"></img>
        </a>
        <a className="text-link text-4xl text-bold content-center pb-[4px]">zoom</a>
      </Row>
    </div>
  )
})

export default PartnerRow
