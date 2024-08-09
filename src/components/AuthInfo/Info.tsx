import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'




import Heading from '../Heading'
import PopOver from '../Popup/PopOver'
import DropDown from '../Dropdown'
import { logOutAction, useAppDispatch } from '@/redux'
import { UilAngleDown, UilBell, UilDollarSign, UilSetting, UilSignout, UilUser, UilUsersAlt } from '@iconscout/react-unicons'


const AuthInfo = React.memo((props: any) => {
  // const router = useRouter()
  const [state, setState] = useState({ flag: 'vi' })
  const { i18n } = useTranslation()
  const { flag } = state

  const dispatch = useAppDispatch()

  const user: any = {}
  const currentUser: any = {}
  // useEffect(() => {
  //   dispatch(logOutAction())
  //   console.log('Logged Out!')
  // }, [])

  const handleLogout = async () => {
    try {
      dispatch(logOutAction())
    } catch (err) {
      console.log(err)
    }
  }

  const userContent = (
    <div>
      <div className="min-w-[280px] sm:min-w-full ">
        <figure className="flex items-center text-sm rounded-[8px] bg-section dark:bg-white/10 py-[20px] px-[25px] mb-[12px]">
          <Image
            className="rounded-full ltr:mr-4 rtl:ml-4"
            src={user?.picture ?? '/img/avatar/chat-auth.png'}
            alt=""
            width="50"
            height="50"
          />
          <figcaption>
            <Heading className="text-dark dark:text-white/[.87] mb-0.5 text-sm" as="h5">
              {user ? user.name : currentUser ? currentUser.displayName : 'Hồ Văn Toàn'}
            </Heading>
            <p className="mb-0 text-xs text-body dark:text-white/60">Chuyên gia UI</p>
          </figcaption>
        </figure>
        <ul className="mb-[10px]">
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUser className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hồ sơ
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilSetting className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Cài đặt
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilDollarSign className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hóa đơn
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUsersAlt className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hoạt động
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilBell className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Giúp đỡ
            </Link>
          </li>
        </ul>
        <Link
          onClick={handleLogout}
          href={user ? '/api/auth/logout' : '#'}
          className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-light hover:text-primary dark:hover:text-white/60 dark:text-white/[.87] mx-[-12px] mb-[-15px] rounded-b-6"
        >
          <UilSignout className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Đăng xuất
        </Link>
      </div>
    </div>
  )

  const onFlagChangeHandle = (value: any, e: any) => {
    e.preventDefault()
    setState({
      ...state,
      flag: value,
    })
    i18n.changeLanguage(value)
  }

  const country = [
    {
      key: '1',
      label: (
        <Link
          href="#"
          onClick={(e) => onFlagChangeHandle('en', e)}
          className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
        >
          <Image className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" src="/img/flag/en.png" alt="" width="20" height="20" />
          <span>English</span>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link
          href="#"
          onClick={(e) => onFlagChangeHandle('vi', e)}
          className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
        >
          <Image className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" src="/img/flag/vi.png" alt="" width="20" height="20" />
          <span>Việt Nam</span>
        </Link>
      ),
    },
  ]

  return (
    <div className="flex items-center justify-end flex-auto gap-6 lg:gap-4">
      <div className=" z-998">
        <DropDown placement="bottomRight" className="z-998" action="" customContent={country} >
          <Link href="#" className="flex">
            <Image src="/img/flag/en.png" alt="" width="20" height="20" />
          </Link>
        </DropDown>
      </div>
      <div className="flex">
        <PopOver placement="bottomRight" content={userContent} action="click">
          <Link href="#" className="flex items-center overflow-x-auto text-light whitespace-nowrap">
            <Image
              src={user?.picture ?? '/img/avatar/matureman1.png'}
              alt="Avatar"
              width="32"
              height="32"
              className="rounded-full"
            />
            <span className="ms-2.5 lg:ms-1.5 me-1.5 text-body dark:text-white/60 text-sm font-medium md:hidden">
              {user ? user.name : currentUser ? currentUser.displayName : 'Abdullah Bin Talha'}
            </span>
            <UilAngleDown className="w-4 h-4 min-w-[16px]" size='24' color="white" />
          </Link>
        </PopOver>
      </div>
    </div>
  )
})

export default AuthInfo
