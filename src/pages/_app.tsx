import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import AdminLayout from './adminLayout'
import AuthLayout from './authLayout'
import { store } from '../redux/store'
import '../i18n/config'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router

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

export default App
