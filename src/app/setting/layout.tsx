'use client';
import React, { use, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Row, Col, Skeleton } from 'antd';
import { PageHeaders } from '@/components/PageHeaders';
import { AdminLayout } from '@/layouts/AdminLayout';
import { useAppSelector } from '@/redux';
import { useRouter } from 'next/navigation';
import { loginPath } from '@/routes';

const AuthorBox = dynamic(() => import('./_components/ProfileAuthorBox'), {
  loading: () => <Skeleton active />,
});

const CoverSection = dynamic(() => import('./_components/CoverSection'), {
  loading: () => <Skeleton active />,
});

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  // Back to login page if user is not logged in
  useEffect(() => {
    if (!user || !isLoggedIn) {
      route.push(loginPath);
    }
  }, []);

  const PageRoutes = [
    {
      path: 'setting',
      breadcrumbName: 'Setting',
    },
    {
      path: 'profile',
      breadcrumbName: 'Profile',
    },
  ];

  return (
    <AdminLayout>
      <div className="container mx-auto">
        <PageHeaders
          routes={PageRoutes}
          title="Thông tin cá nhân"
          className="flex justify-between items-center px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        />

        <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
          <Row gutter={25}>
            <Col xxl={6} lg={8} md={10} xs={24}>
              <AuthorBox />
            </Col>
            <Col xxl={18} lg={16} md={14} xs={24}>
              <div className="mb-[35px] md:mt-[25px]">
                <CoverSection />
              </div>
              {children}
            </Col>
          </Row>
        </main>
      </div>
    </AdminLayout>
  );
};

export default SettingsLayout;
