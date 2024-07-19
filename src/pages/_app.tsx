import '@/styles/globals.css'
import '../i18n/config'

import type { AppProps } from 'next/app'
import { useEffect, useState, type FC } from 'react'

import { useRouter } from 'next/router'
import AdminLayout from '@/layouts/AdminLayout'
import AuthLayout from '@/layouts/AuthLayout'
import { wrapper } from '@/redux/store'
import { Provider } from 'react-redux'
import LandingLayout from '@/layouts/LandingLayout'

import { ConfigProvider } from 'antd';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter()
  const { pathname } = router
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  const [docEnv, setDocEnv] = useState<boolean>(false)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setDocEnv(true)
    }
  }, [])

  const renderLayout = () => {
    console.log(pathname)
    if (
      pathname === '/auth' ||
      pathname.startsWith('auth/register') ||
      pathname.startsWith('auth/forgotPassword') ||
      pathname.startsWith('auth/login')
    ) {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )
    } else if (pathname.startsWith('/admin')) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )
    }

    return (
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    )
  }

  return (
    <ConfigProvider>
      <Provider store={store}>{docEnv && renderLayout()}</Provider>
    </ConfigProvider>
  )
}
export default wrapper.withRedux(App)
