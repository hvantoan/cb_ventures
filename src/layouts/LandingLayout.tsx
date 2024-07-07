import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Footer from '@/layouts/Header/footer'
import Sidebar from '@/layouts/Sidebar'
import HeaderTop from '@/layouts/Header'

const { Content } = Layout

import config from '@/config/config'
import { RootState } from '@/redux/store'
const { theme } = config

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, rtl, mainContent } = useSelector((state: RootState) => {
    return {
      collapsed: state.layout.menuCollapse,
      isLoggedIn: state.auth.isLoggedIn,
      rtl: state.layout.rtlData,
      mainContent: state.layout.mode,
    }
  })

  if (mainContent === 'darkMode') {
    document.body.classList.add('dark')
    document.body.classList.add('dark')
  }

  if (rtl) {
    const html: any = document.querySelector('html')
    html.setAttribute('dir', 'rtl')
  }

  const router = useRouter()

  useEffect(() => {
    if (router.pathname == '/') {
      router.push('/landing')
    }
    // // If the user is not logged in and trying to access a restricted page, redirect to the login page
    // if (
    //   !isLoggedIn &&
    //   !router.pathname.startsWith('/login') &&
    //   !router.pathname.startsWith('/register') &&
    //   !router.pathname.startsWith('/forgot-password')
    // ) {
    //   router.push('/landing')
    // }
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <HeaderTop />
      <div className="flex flex-row gap-5 mt-[72px]">
        <Sidebar />
        <Layout className={`max-w-full duration-[300ms]`}>
          <Content>
            {children}
            <Footer />
          </Content>
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default LandingLayout
