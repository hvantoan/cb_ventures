
import { Layout, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from '../AuthInfo/Search'
import { UilEllipsisV } from '@iconscout/react-unicons'
import AuthInfo from '../AuthInfo/Info'
import TopMenu from '../Sidebar/TopMenu'


export default function HeaderTop() {
  const topMenu = true;
  const isBrowser = typeof window !== 'undefined';

  return (
    <Layout.Header className="fixed flex items-center w-full bg-body_color z-10">
      <Link href="/admin">
        <Image
          className="w-full max-w-[120px] xs:max-w-[100px]"
          src={'/img/logo_horizontal.png'}
          alt="Logo"
          width="120"
          height="20"
        />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className='flex-1 min-w-0 bg-body_color hover:text-secondary active:bg-body_color'
        itemProp='hover:text-secondary'
        items={[
          {
            key: "home",
            label: `Trang chủ`,
          },
          {
            key: "about",
            label: `Giới thiệu`,
          }
        ]}
      >
      </Menu>
      {/* <div className="container mx-auto px-20 sm:px-0 flex flex-row items-center flex-1 h-full">
        <div className="rtl:ssm:pr-[15px] ltr:pr-5 rtl:pl-5 ltr:ssm:pl-[15px] ltr:ssm:pr-[15px] rtl:ssm::pl:[15px] ltr:pl-[30px] rtl:pr-[30px] xs:ltr:pl-[20px] xs:rtl:pr-[20px] min-w-[280px] ssm:min-w-0 xs:min-w-[0px] h-full grid align-middle">
          <div className="flex items-center justify-evenly">
            <Link href="/admin">
              <Image
                className="w-full max-w-[120px] xs:max-w-[100px]"
                src={'/img/logo_horizontal.png'}
                alt="Logo"
                width="120"
                height="20"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between flex-auto ltr:mr-[10px] rtl:ml-[10px] [&>div:first-child]:flex [&>div]:items-center ">
          {isBrowser && window.innerWidth > 1200 && topMenu ? <TopMenu /> : <div></div>}
          <div className="flex flex-row items-center md:hidden me-[17px]">
            {isBrowser && window.innerWidth > 1200 && topMenu ? (
              <div className="flex top-right-wrap">
                <AuthInfo />
              </div>
            ) : (
              <AuthInfo />
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center ltr:pr-[25px] rtl:pl-[25px] ltr:ssm:pr-[10px] rtl:ssm:pl-[10px] sm:gap-x-[10px]">
          <SearchBar />
          <Link className="inline-flex text-light dark:text-white/60" href="#">
            <UilEllipsisV className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div> */}
    </Layout.Header >
  )
}
