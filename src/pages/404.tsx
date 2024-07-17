import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import Link from 'next/link'

import Heading from '@/components/Heading'
import { Buttons } from '@/components/Buttons'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const [state, setState] = useState({
    isLoading: true,
  })
  const { t } = useTranslation()

  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false })
    }, 1500)
  }, [])

  return (
    <main className="min-h-[715px] lg:min-h-[580px]">
      {state.isLoading ? (
        <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
          <Spin />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col min-h-screen pb-36 px-[15px] text-center">
          <Image className="mx-auto mb-20" src={`/img/pages/404.svg`} alt="404" width="400" height="315" />
          <Heading
            className="text-light-extra dark:text-white/60 mb-5 text-6xl ssm:text-5xl xs:text-4xl font-semibold"
            as="h3"
          >
            404
          </Heading>
          <p className="text-body dark:text-white/60 mb-6 text-lg xs:text-base font-medium">
            {t("404.mesage")}
          </p>
          <Link href="/admin">
            <Buttons size="default" type="primary" to="/admin" className="bg-primary text-white h-11">
              Return Home
            </Buttons>
          </Link>
        </div>
      )}
    </main>
  )
}

export default NotFound
