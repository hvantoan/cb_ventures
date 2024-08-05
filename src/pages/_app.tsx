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

import AOS from "aos";

import "aos/dist/aos.css";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter()
  const { pathname } = router
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  const [docEnv, setDocEnv] = useState<boolean>(false)
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

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
