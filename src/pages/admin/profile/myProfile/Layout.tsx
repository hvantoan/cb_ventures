import React from 'react'
import { Row, Col, Skeleton } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PageHeaders } from '@/components/PageHeaders'
import dynamic from 'next/dynamic'

const UserCards = dynamic(() => import('./overview/UserCard'), {
  loading: () => (
    <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
      <Skeleton avatar active paragraph={{ rows: 3 }} />
    </div>
  ),
})
const UserBio = dynamic(() => import('./overview/UserBio'), {
  loading: () => (
    <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
      <Skeleton avatar active paragraph={{ rows: 3 }} />
    </div>
  ),
})
const CoverSection = dynamic(() => import('./overview/CoverSection'), {
  loading: () => (
    <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
      <Skeleton active />
    </div>
  ),
})

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { pathname } = router
  const currentPath = pathname.split('/')[4]

  const path = '/admin/profile/myProfile'

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'My Profile',
    },
  ]
  return (
    <>
      <PageHeaders
        className="flex flex-wrap items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col sm:justify-center"
        title="My Profile"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <UserCards user={{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'img/users/1.png' }} />
            <div className="mt-[25px]">
              <UserBio />
            </div>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24} className="md:order-[-1] md:mb-[25px]">
            <>
              <div className="relative z-[1] bg-white dark:bg-white/10 rounded-10 mb-[25px]">
                <CoverSection />
                <nav className="px-[25px]">
                  <ul className="m-0 flex items-center gap-[22px]">
                    <li>
                      <Link
                        className={`relative block py-[20px] px-[5px] text-light after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in-out font-medium ${
                          currentPath === 'overview'
                            ? 'text-primary after:visible after:bg-primary'
                            : 'after:invisible after:bg-transparent'
                        }`}
                        href={`${path}/overview`}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`relative block py-[20px] px-[5px] text-light after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in-out font-medium ${
                          currentPath === 'timeline'
                            ? 'text-primary after:visible after:bg-primary'
                            : 'after:invisible after:bg-transparent'
                        }`}
                        href={`${path}/timeline`}
                      >
                        Timeline
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`relative block py-[20px] px-[5px] text-light after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in-out font-medium ${
                          currentPath === 'activity'
                            ? 'text-primary after:visible after:bg-primary'
                            : 'after:invisible after:bg-transparent'
                        }`}
                        href={`${path}/activity`}
                      >
                        Activity
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {children}
            </>
          </Col>
        </Row>
      </main>
    </>
  )
}

export default ProfileLayout
