import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Footer from '@/layout/header/footer'
import Sidebar from '@/layout/sidebar'
import HeaderTop from '@/layout/header'

const { Content } = Layout

import config from '@/config/config'
import { createSelector } from '@reduxjs/toolkit'
import { selectAuth, selectLayout } from '@/redux/rootReducers'
const { theme } = config

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  var selectLayoutSetting = createSelector(selectAuth, selectLayout, (auth, layout) => {
    return {
      topMenu: layout.topMenu,
      collapsed: layout.menuCollapse,
      isLoggedIn: auth.isLoggedIn,
      rtl: layout.rtlData,
      mainContent: layout.mode,
    }
  })

  const { topMenu, collapsed, isLoggedIn, rtl, mainContent } = useSelector(selectLayoutSetting)

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
    // If the user is not logged in and trying to access a restricted page, redirect to the login page
    if (
      !isLoggedIn &&
      !router.pathname.startsWith('/login') &&
      !router.pathname.startsWith('/register') &&
      !router.pathname.startsWith('/forgot-password')
    ) {
      router.push('/')
    }
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <HeaderTop />

      <div className="flex flex-row gap-5 mt-[72px]">
        <Sidebar />

        <Layout
          className={`max-w-full duration-[300ms] ${
            !topMenu ? `xl:ps-0 ease-[ease] ${collapsed ? 'ps-[80px]' : 'ps-[280px] delay-[150ms]'}` : ''
          }`}
        >
          <Content>
            {children}
            <Footer />
          </Content>
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default AdminLayout
