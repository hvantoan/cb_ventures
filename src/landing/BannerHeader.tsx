import React from 'react'
import { Row, Col, Card, Button, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'

const BannerHeader = React.memo((column: any) => {
  return (
    <div>
      <Row className='sm:place-content-center'>
        <h1 className="text-7xl sm:text-4xl sm:text-center">
          ROAD MAP
          <span className="text-primary"> Investment Solution</span>
        </h1>
        <p className="text-white/60 pt-10 pb-10 text-3xl sm:text-center sm:text-xl">EXPERT ADVISOR INVESTMENT CONSULTANT</p>
        <Button className="h-150 pl-[40px] sm:pl-[30px] pr-[30px] sm:pr-[20px] py-[30px] text-base/[20px] sm:w-[160px]" htmlType="button" type="primary">
          <p className='text-dark text-base/[20px]'>Get Started</p>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-thin-kawalan-studio/24/external-arrow-up-right-arrows-thin-kawalan-studio.png"
            alt="external-arrow-up-right-arrows-thin-kawalan-studio"
          />
        </Button>
        <Button className="h-150 pl-[40px] sm:pl-[30px] pr-[30px] sm:pr-[3 0px] py-[30px] text-base/[20px] text-dark lg:ml-[15px] bg-body text-pink sm:w-[160px]" htmlType="button">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/48/circled-play.png"
            alt="circled-play"
          />
          Watch Video
        </Button>
      </Row>
      <Row className="pt-[60px]">
        <h2 className="text-2xl sm:text-center sm:w-full"> FOLLOW US</h2>
      </Row>
      <Row className="pt-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18.5"
            fill="#rgb(255, 255, 255, .06)"
            stroke="#a0a0a0"
            stroke-miterlimit="10"
          ></circle>
          <path
            fill="#98D083"
            d="M25.368,20H22v12h-5V20h-3v-4h3v-2.41C17.002,10.082,18.459,8,22.592,8H26v4h-2.287	C22.104,12,22,12.6,22,13.723V16h4L25.368,20z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 40 40"
          className="ml-[30px]"
        >
          <circle
            cx="20"
            cy="20"
            r="18.5"
            fill="#rgb(255, 255, 255, .06)"
            stroke="#a0a0a0"
            stroke-miterlimit="10"
          ></circle>
          <path
            fill="#fff"
            d="M10.5,14.5h4v15h-4V14.5z M12.488,12.5h-0.022c-1.194,0-1.966-0.89-1.966-2.001	c0-1.135,0.796-1.999,2.011-1.999c1.217,0,1.966,0.864,1.989,1.999C14.5,11.61,13.728,12.5,12.488,12.5z M31.5,20	c0-3.038-2.462-5.5-5.5-5.5c-1.862,0-3.505,0.928-4.5,2.344V14.5h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4	C31.5,29.5,31.5,20.421,31.5,20z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="ml-[30px]"
        >
          <path
            fill="#fff"
            d="M23.994 47.002c8.836 0 16.008.225 16.008.501s-7.172.501-16.008.501c-8.836 0-16.008-.225-16.008-.501S15.158 47.002 23.994 47.002zM4.002 33.989V13.995c0-5.521 4.481-10.003 10.003-10.003h19.996c5.521 0 10.003 4.481 10.003 10.003v19.993c0 5.521-4.481 10.003-10.003 10.003H14.005C8.483 43.991 4.002 39.51 4.002 33.989zM6.002 34.989V14.995c0-4.968 4.033-9.003 9.003-9.003h19.996c2.229 0 4.271.813 5.844 2.159-1.652-1.932-4.107-3.159-6.844-3.159H14.005c-4.969 0-9.003 4.035-9.003 9.003v19.993c0 2.74 1.224 5.195 3.157 6.845C6.814 39.262 6.002 37.219 6.002 34.989zM40.005 33.915V14.069c0-3.355-2.724-6.079-6.079-6.079H14.079c-3.356 0-6.079 2.724-6.079 6.079v19.847c0 3.356 2.723 6.079 6.079 6.079h19.847C37.281 39.994 40.005 37.271 40.005 33.915zM10.001 33.915V14.069c0-2.249 1.828-4.079 4.079-4.079h19.847c2.249 0 4.079 1.829 4.079 4.079v19.847c0 2.251-1.829 4.079-4.079 4.079H14.079C11.829 37.994 10.001 36.166 10.001 33.915zM32.006 23.991c0-4.416-3.585-8-8.001-8-4.417 0-8.001 3.584-8.001 8 0 4.417 3.584 8 8.001 8C28.421 31.991 32.006 28.409 32.006 23.991zM18.003 23.991c0-3.311 2.689-6 6.001-6 3.311 0 6.001 2.689 6.001 6 0 3.312-2.691 6-6.001 6C20.693 29.991 18.003 27.303 18.003 23.991zM34.005 14.991c0-.552-.449-1-1.001-1s-1.001.448-1.001 1c0 .552.449 1 1.001 1S34.005 15.543 34.005 14.991z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 40 40"
          className="ml-[30px]"
        >
          <path
            fill="#rgb(255, 255, 255, .06)"
            d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"
          ></path>
          <path
            fill="#a0a0a0"
            d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
          ></path>
          <path
            fill="#fff"
            d="M20,31c-6.065,0-11-4.935-11-11S13.935,9,20,9s11,4.935,11,11S26.065,31,20,31z M20,11 c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S24.963,11,20,11z"
          ></path>
          <polygon fill="#fff" points="16,15 16,20 16,25 25,20"></polygon>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 40 40"  className="ml-[30px]">
          <circle cx="20" cy="20" r="18.5" fill="#rgb(255, 255, 255, .06)" stroke="#a0a0a0" stroke-miterlimit="10"></circle>
          <path
            fill="#fff"
            d="M32,12.62c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372c-0.896-0.95-2.174-1.372-3.59-1.372c-2.72,0-4.617,2.305-4.617,5v2c-4,0-7.9-3.047-10.327-6	c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057	c0,2.367,1.661,3.974,3.912,4.422C12.501,22.092,12,22.5,10.072,22.5c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2	c-0.399,0-0.615,0.022-1-0.023c2.178,1.38,5.22,2.023,8,2.023c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13	C30.95,14.318,31.342,13.604,32,12.62"
          ></path>
        </svg>
      </Row>
    </div>
  )
})

export default BannerHeader
