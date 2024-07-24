import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import backgroundImage from '../../public/img/admin-bg-light.png'
import { selectAuth } from '@/redux/rootReducers'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useSelector(selectAuth)
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/admin')
    }
  })

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className="bg-top bg-no-repeat h-screen"  >
      <div className="container h-full mx-auto content-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
