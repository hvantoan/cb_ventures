import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import AdminLayout from './adminLayout'
import AuthLayout from './authLayout'
import '../i18n/config'
import { wrapper } from '@/redux/store'
import { FC } from 'react'
import { Provider } from 'react-redux'

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter()
  const { pathname } = router
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
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
      <Provider store={store}>{renderLayout()}</Provider>
    </>
  )
}
export default wrapper.withRedux(App)
