import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import config from '@/config/config'
import { RootState } from '@/redux/store'
import { changeMenuMode } from '@/redux/themeLayout/reducers'
const { theme } = config




const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const { rtl, mainContent } = useSelector((state: RootState) => {
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

    if (router.pathname == '/' || !router.pathname) {
      router.push('/landing')
    }
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default LandingLayout
