import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import backgroundImage from '../../public/img/admin-bg-light.png'
import { selectAuth } from '@/redux/rootReducers'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useSelector(selectAuth)
  const router = useRouter()

  useEffect(() => {
    // If the user is logged in and trying to access a authentication page, redirect to the admin page
    if (
      isLoggedIn &&
      (router.pathname == '/' ||
        router.pathname.startsWith('/login') ||
        router.pathname.startsWith('/register') ||
        router.pathname.startsWith('/forgot-password'))
    ) {
      router.push('/admin')
    }
  }, [router])

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className="bg-top bg-no-repeat"
    >
      <div className="py-[120px] 2xl:py-[80px] px-[15px]">
        <div className="flex justify-center">
          <Image className="dark:hidden" src="/img/logo_dark.svg" alt="Logo Dark" width="140" height="32" />
          <Image className="hidden dark:block" src="/img/logo_white.svg" alt="Logo" width="140" height="32" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
