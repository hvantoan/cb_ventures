import {
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBookAlt,
  UilBookOpen,
  UilChartBar,
  UilCircle,
  UilClock,
  UilCompactDisc,
  UilDocumentLayoutLeft,
  UilEdit,
  UilExclamationOctagon,
  UilFile,
  UilIcons,
  UilImages,
  UilLayerGroup,
  UilMap,
  UilPresentation,
  UilSearch,
  UilServer,
  UilSetting,
  UilTable,
  UilEllipsisV,
} from '@iconscout/react-unicons'
import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '@/redux/reducers/themeLayout/reducers'

function MenuItems() {
  const path = '/admin'
  const { t } = useTranslation()
  const { topMenu } = useSelector((state: RootState) => {
    return {
      topMenu: state.layout.topMenu,
    }
  })

  const router = useRouter()
  const { pathname } = router
  const pathArray = pathname && pathname !== '/' ? pathname.split(path) : []
  const mainPath = pathArray.length > 1 ? pathArray[1] : ''
  const mainPathSplit = mainPath!.split('/')

  const [openKeys, setOpenKeys] = React.useState<any>(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []
  )
  const [openItems, setOpenItems] = React.useState(
    !topMenu
      ? [`${mainPathSplit.length === 1 ? 'demo-1' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`]
      : []
  )

  useEffect(() => {
    // Check if the current route matches the base path.
    if (pathname === path) {
      setOpenItems(['dashboard']) // active menu item.
    }
  }, [pathname])

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys)
  }

  const onClick = (item: any) => {
    setOpenItems([item.key])
    if (item.keyPath.length === 1) setOpenKeys([])
  }

  const dispatch = useDispatch()

  const changeNavbar = (topMode: any) => {
    const html: any = document.querySelector('html')
    if (topMode) {
      html.classList.add('hexadash-topmenu')
    } else {
      html.classList.remove('hexadash-topmenu')
    }
    //@ts-ignore
    dispatch(changeMenuMode(topMode))
  }

  const changeLayoutDirection = (rtlMode: any) => {
    if (rtlMode) {
      const html: any = document.querySelector('html')
      html.setAttribute('dir', 'rtl')
    } else {
      const html: any = document.querySelector('html')
      html.setAttribute('dir', 'ltr')
    }
    //@ts-ignore
    dispatch(changeDirectionMode(rtlMode))
  }

  const changeLayout = (mode: any) => {
    //@ts-ignore
    dispatch(changeLayoutMode(mode))
  }

  const darkmodeActivated = () => {
    document.body.classList.add('dark')
  }

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark')
  }

  function getItem(label: any, key: any, icon: any, children: any) {
    return {
      label,
      key,
      icon,
      children,
    }
  }

  const items = [
    getItem(<Link href={`${path}`}>{t('dashboard')}</Link>, 'dashboard', !topMenu && <UilArrowGrowth />, null),
    getItem(t('contact'), 'contact', !topMenu && <UilAt />, [
      getItem(<Link href={`${path}/contact/grid`}>{t('contact grid')}</Link>, 'contact-grid', null, null),
      getItem(<Link href={`${path}/contact/list`}>{t('contact list')}</Link>, 'contact-list', null, null),
      getItem(<Link href={`${path}/contact/addNew`}>{t('contact create')}</Link>, 'addNew', null, null),
    ]),
    getItem(
      !topMenu && (
        <p className="flex text-[12px] font-medium uppercase text-theme-gray mt-[20px] dark:text-white/60 pe-[15px]">
          {t('Features')}
        </p>
      ),
      'features-title',
      null,
      null
    ),
    getItem(
      !topMenu && (
        <p className="flex text-[12px] font-medium uppercase text-theme-gray mt-[20px] dark:text-white/60 pe-[15px]">
          {t('Pages')}
        </p>
      ),
      'page-title',
      null,
      null
    ),
    getItem(
      <Link href={`${path}/pages/settings`}>{t('Settings')}</Link>,
      'settings',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/settings`}>
          <UilSetting />
        </Link>
      ),
      null
    ),
    getItem(t('gallery'), 'gallery', !topMenu && <UilImages />, [
      getItem(
        <Link href={`${path}/pages/gallery/one`}>
          {t('Gallery')} {t('1')}
        </Link>,
        'gallery-one',
        null,
        null
      ),
    ]),
    getItem(
      <Link href={`${path}/pages/pricing`}>{t('Pricing')}</Link>,
      'pricing',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/pricing`}>
          <UilCircle />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/banners`}>{t('Banners')}</Link>,
      'banners',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/banners`}>
          <UilPresentation />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/testimonials`}>{t('Testimonials')}</Link>,
      'testimonials',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/testimonials`}>
          <UilBookOpen />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/faq`}>{t('Faqs')}</Link>,
      'faq',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/faq`}>
          <UilCircle />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/search`}>
        {t('Search')} {t('Results')}
      </Link>,
      'search',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/search`}>
          <UilSearch />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/starter`}>
        {t('Blank')} {t('Page')}
      </Link>,
      'starter',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/starter`}>
          <UilCircle />
        </Link>
      ),
      null
    ),
    getItem(t('Knowledgebase'), 'knowledgebase', !topMenu && <UilBookAlt />, [
      getItem(
        <Link href={`${path}/pages/knowledgeBase`}>
          {t('Knowledge')} {t('Base')}
        </Link>,
        'knowledgeBase',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/pages/knowledgeBase/articles`}>
          {t('All')} {t('Article')}
        </Link>,
        'articles',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/pages/knowledgeBase/single`}>
          {t('Single')} {t('Article')}
        </Link>,
        'knowledgebaseSingle',
        null,
        null
      ),
    ]),
    getItem(t('blog'), 'blog', !topMenu && <UilDocumentLayoutLeft />, [
      getItem(
        <Link href={`${path}/pages/blog/one`}>
          {t('Blog')} {t('One')}
        </Link>,
        'blog-1',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/pages/blog/two`}>
          {t('Blog')} {t('Two')}
        </Link>,
        'blog-2',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/pages/blog/three`}>
          {t('Blog')} {t('Three')}
        </Link>,
        'blog-3',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/pages/blog/details`}>
          {t('Blog')} {t('Details')}
        </Link>,
        'blog-details',
        null,
        null
      ),
    ]),
    getItem(
      <Link href={`${path}/pages/maintenance`}>{t('Maintanance')}</Link>,
      'maintenance',
      !topMenu && <UilAirplay />,
      null
    ),
    getItem(
      <Link href={`${path}/pages/404`}>{t('404')}</Link>,
      '404',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/404`}>
          <UilExclamationOctagon />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/comingSoon`}>
        {t('Coming')} {t('Soon')}
      </Link>,
      'comingsoon',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/comingSoon`}>
          <UilClock />
        </Link>
      ),
      null
    ),
    getItem(
      <Link href={`${path}/pages/termCondition`}>
        {t('Terms')} {t('&')} {t('conditions')}
      </Link>,
      'termcondition',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/pages/termCondition`}>
          <UilFile />
        </Link>
      ),
      null
    ),
  ]

  return (
    <Menu
      onClick={onClick}
      onOpenChange={onOpenChange}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      defaultSelectedKeys={openKeys}
      defaultOpenKeys={openItems}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      selectedKeys={openItems}
      items={items}
    />
  )
}

export default MenuItems
