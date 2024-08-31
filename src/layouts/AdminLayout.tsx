'use client';
import { Layout } from 'antd';
import HeaderTop from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import { setUser, useAppDispatch, useAppSelector } from '@/redux';
import { Content } from 'antd/es/layout/layout';
import { Suspense, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import Loading from '@/app/loading';
import { doc } from 'prettier';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const dispatch = useAppDispatch();

  // Redux state
  const { topMenu, mode, menuCollapse, rtlData } = useAppSelector((state) => state.layout);

  // App state
  useEffect(() => {
    if (mode === 'darkMode') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    if (rtlData) {
      const htmlElement: HTMLElement | null = document.querySelector('html');
      if (htmlElement) {
        htmlElement.setAttribute('dir', 'rtl');
      }
    }
  }, [mode, rtlData]);

  // Update auth state
  useEffect(() => {
    getSession().then((session) => {
      if (session?.user) {
        dispatch(setUser(session?.user));
      }
    });
  }, [dispatch]);

  return (
    <Layout className="dark:bg-body_color">
      <HeaderTop />
      <Layout className="mt-[72px] flex flex-row gap-5">
        <Sidebar />
        <Content
          className={`max-w-full duration-[300ms] dark:bg-body_color ${!topMenu ? `ease-[ease] xl:ps-0 ${menuCollapse ? 'ps-[80px]' : 'ps-[220px] delay-[150ms]'}` : ''}`}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}
