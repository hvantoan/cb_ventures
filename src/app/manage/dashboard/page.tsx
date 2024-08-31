'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeaders } from '@/components/PageHeaders';
import { changeLayoutMode, changeMenuCollapse, changeMenuMode, useAppDispatch } from '@/redux';

const OverviewDataList = dynamic(() => import('./_components/Dashboard/OverviewDataList'), {
  loading: () => <Skeleton active />,
});
const SalesReport = dynamic(() => import('./_components/Dashboard/SalesReport'), {
  ssr: false,
  loading: () => <Skeleton active />,
});
const SalesGrowth = dynamic(() => import('./_components/Dashboard/SalesGrowth'), {
  loading: () => <Skeleton active />,
});
const SalesByLocation = dynamic(() => import('./_components/Dashboard/SalesByLocation'), {
  ssr: false,
  loading: () => <Skeleton active />,
});
const TopSellingProduct = dynamic(() => import('./_components/Dashboard/TopSellingProducts'), {
  loading: () => <Skeleton active />,
});
const BrowserState = dynamic(() => import('./_components/Dashboard/BrowserState'), {
  loading: () => <Skeleton active />,
});

const AdminPage = () => {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(changeMenuMode(false));
    dispath(changeMenuCollapse(false));
    dispath(changeLayoutMode('lightMode'));
  }, []);

  return (
    <>
      <PageHeaders
        routes={[
          {
            path: 'admin',
            breadcrumbName: 'Dashboard',
          },
          {
            path: 'first',
            breadcrumbName: 'Thống kê',
          },
        ]}
        title="Dashboard"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <OverviewDataList />
          </Col>
          <Col xxl={12} xs={24} className="mb-[25px]">
            <SalesReport />
          </Col>
          <Col xxl={8} xs={24} className="mb-[25px]">
            <SalesGrowth />
          </Col>
          <Col xxl={16} xs={24} className="mb-[25px]">
            <SalesByLocation />
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={12} xs={24} className="mb-[25px]">
            <TopSellingProduct />
          </Col>
          <Col xl={12} xs={24} className="mb-[25px]">
            <BrowserState />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminPage;
