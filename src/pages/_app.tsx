import '@/styles/globals.css'
import '../i18n/config'

import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import AdminLayout from '@/layouts/AdminLayout'
import AuthLayout from '@/layouts/AuthLayout'
import { wrapper } from '@/redux/store'
import { FC, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import LandingLayout from '@/layouts/LandingLayout'

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter()
  const { pathname } = router
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  const [docEnv, setDocEnv] = useState(false)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setDocEnv(true)
    }
  }, [])

  const renderLayout = () => {
    console.log(pathname)
    if (pathname === "/auth" || pathname.startsWith('auth/register') || pathname.startsWith('auth/forgotPassword') || pathname.startsWith('auth/login')) {
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

  return <Provider store={store}>{docEnv && renderLayout()}</Provider>
}
export default wrapper.withRedux(App)
