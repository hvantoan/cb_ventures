import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Footer from '@/components/Header/footer'
import Sidebar from '@/components/Sidebar'
import HeaderTop from '@/components/Header'

const { Content } = Layout

import config from '@/config/config'
import { RootState } from '@/redux/store'
import { changeLayoutMode, changeMenuMode } from '@/redux/themeLayout/reducers'
const { theme } = config

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const { topMenu, collapsed, isLoggedIn, rtl, mainContent } = useSelector((state: RootState) => {
    return {
      topMenu: state.layout.topMenu,
      collapsed: state.layout.menuCollapse,
      isLoggedIn: state.auth.isLoggedIn,
      rtl: state.layout.rtlData,
      mainContent: state.layout.mode,
    }
  })

  useEffect(() => {
    dispatch(changeMenuMode(true))
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
    if (router.pathname.includes('/admin')) {
      router.pathname = '/admin'
    }

    if (router.pathname == '/') {
      router.push('/landing')
    }
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <HeaderTop />
      <div className="flex flex-row gap-5 mt-[72px]">
        <Sidebar />
        <Layout className="max-w-full duration-[300ms] overflow-auto">
          <Content>
            {children}
            <Footer />
          </Content>
        </Layout>
      </div>
    </ThemeProvider >
  )
}

export default LandingLayout
