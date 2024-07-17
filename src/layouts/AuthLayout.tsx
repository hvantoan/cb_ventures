import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import backgroundImage from '../../public/img/admin-bg-light.png'
import { selectAuth } from '@/redux/rootReducers'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useSelector(selectAuth)
  const router = useRouter()

  useEffect(() => {}, [router])

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className="bg-top bg-no-repeat"
    >
      <div className="py-[120px] 2xl:py-[80px] px-[15px]">
        <div className="flex justify-center">
          <Image src="/img/logo_horizontal.png" alt="Logo Dark" width="250" height="32" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
