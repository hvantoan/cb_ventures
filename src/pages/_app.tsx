import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import AdminLayout from './adminLayout'
import '../i18n/config'
import { wrapper } from '@/redux/store'
import { FC, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import dynamic from 'next/dynamic'
import AuthLayout from './authLayout'

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
    if (
      pathname == '/' ||
      pathname.startsWith('/register') ||
      pathname.startsWith('/forgotPassword') ||
      pathname.startsWith('/login')
    ) {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )
    } else {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )
    }
  }

  return (
    <>
      <Provider store={store}>{docEnv && renderLayout()}</Provider>
    </>
  )
}
export default wrapper.withRedux(App)
