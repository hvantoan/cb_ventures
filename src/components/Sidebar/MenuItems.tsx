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
import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '@/redux/themeLayout/reducers'

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
    getItem(t('UI Elements'), 'components', !topMenu && <UilLayerGroup />, [
      getItem(<Link href={`${path}/elements/alerts`}>{t('Alerts')}</Link>, 'alerts', null, null),
      getItem(<Link href={`${path}/elements/auto-complete`}>{t('Autocomplete')}</Link>, 'auto-complete', null, null),
      getItem(<Link href={`${path}/elements/avatar`}>{t('Avatar')}</Link>, 'avatar', null, null),
      getItem(<Link href={`${path}/elements/badge`}>{t('Badge')}</Link>, 'badge', null, null),
      getItem(<Link href={`${path}/elements/breadcrumb`}>{t('Breadcrumb')}</Link>, 'breadcrumb', null, null),
      getItem(<Link href={`${path}/elements/button`}>{t('Button')}</Link>, 'button', null, null),
      getItem(<Link href={`${path}/elements/calendar`}>{t('Calendar')}</Link>, 'calendar', null, null),
      getItem(<Link href={`${path}/elements/cards`}>{t('Cards')}</Link>, 'cards', null, null),
      getItem(<Link href={`${path}/elements/carousel`}>{t('Carousel')}</Link>, 'carousel', null, null),
      getItem(<Link href={`${path}/elements/cascader`}>{t('Casecader')}</Link>, 'cascader', null, null),
      getItem(<Link href={`${path}/elements/checkbox`}>{t('Checkbox')}</Link>, 'checkbox', null, null),
      getItem(<Link href={`${path}/elements/collapse`}>{t('Collapse')}</Link>, 'callapse', null, null),
      getItem(<Link href={`${path}/elements/comments`}>{t('Comments')}</Link>, 'comments', null, null),
      getItem(
        <Link href={`${path}/elements/base`}>
          {t('Dashboard')} {t('Base')}
        </Link>,
        'base',
        null,
        null
      ),
      getItem(<Link href={`${path}/elements/date-picker`}>{t('Datepicker')}</Link>, 'date-picker', null, null),
      getItem(<Link href="/admin/elements/drag">Drag & Drop</Link>, 'drag', null, null),
      getItem(<Link href={`${path}/elements/drawer`}>{t('Drawer')}</Link>, 'drawer', null, null),
      getItem(<Link href={`${path}/elements/dropdown`}>{t('Dropdown')}</Link>, 'dropdown', null, null),
      getItem(<Link href={`${path}/elements/empty`}>{t('Empty')}</Link>, 'empty', null, null),
      getItem(<Link href={`${path}/elements/grid`}>{t('Grid')}</Link>, '-dash-grid', null, null),
      getItem(<Link href={`${path}/elements/input`}>{t('Input')}</Link>, 'input', null, null),
      getItem(<Link href={`${path}/elements/list`}>{t('List')}</Link>, 'dash-list', null, null),
      getItem(<Link href={`${path}/elements/menu`}>{t('Menu')}</Link>, 'menu', null, null),
      getItem(<Link href={`${path}/elements/message`}>{t('Message')}</Link>, 'message', null, null),
      getItem(<Link href={`${path}/elements/modals`}>{t('Modals')}</Link>, 'modals', null, null),
      getItem(<Link href={`${path}/elements/notification`}>{t('Notification')}</Link>, 'notifications', null, null),
      getItem(
        <Link href={`${path}/elements/page-headers`}>
          {t('Page')} {t('Headers')}
        </Link>,
        'page-headers',
        null,
        null
      ),
      getItem(<Link href={`${path}/elements/pagination`}>{t('Paginations')}</Link>, 'paginations', null, null),
      getItem(<Link href={`${path}/elements/confirm`}>{t('Popconfirm')}</Link>, 'popconfirme', null, null),
      getItem(<Link href={`${path}/elements/popover`}>{t('Popover')}</Link>, 'popover', null, null),
      getItem(<Link href={`${path}/elements/progress`}>{t('Progress')}</Link>, 'progress', null, null),
      getItem(<Link href={`${path}/elements/radio`}>{t('Radio')}</Link>, 'radio', null, null),
      getItem(<Link href={`${path}/elements/rate`}>{t('Rate')}</Link>, 'rate', null, null),
      getItem(<Link href={`${path}/elements/result`}>{t('Result')}</Link>, 'result', null, null),
      getItem(<Link href={`${path}/elements/select`}>{t('Select')}</Link>, 'select', null, null),
      getItem(<Link href={`${path}/elements/skeleton`}>{t('Skeleton')}</Link>, 'skeleton', null, null),
      getItem(<Link href={`${path}/elements/slider`}>{t('Slider')}</Link>, 'slider', null, null),
      getItem(<Link href={`${path}/elements/spiner`}>{t('Spinner')}</Link>, 'spiner', null, null),
      getItem(<Link href={`${path}/elements/statistic`}>{t('Statistics')}</Link>, 'statistics', null, null),
      getItem(<Link href={`${path}/elements/steps`}>{t('Steps')}</Link>, 'steps', null, null),
      getItem(<Link href={`${path}/elements/switch`}>{t('Switch')}</Link>, 'switch', null, null),
      getItem(<Link href={`${path}/elements/tabs`}>{t('Tabs')}</Link>, 'tabs', null, null),
      getItem(<Link href={`${path}/elements/tags`}>{t('Tags')}</Link>, 'tags', null, null),
      getItem(<Link href={`${path}/elements/timeline`}>{t('Timeline')}</Link>, 'timeline', null, null),
      getItem(<Link href={`${path}/elements/timepicker`}>{t('Timepicker')}</Link>, 'timepicker', null, null),
      getItem(
        <Link href={`${path}/elements/tree-select`}>
          {t('Tree')} {t('Select')}
        </Link>,
        'treeselect',
        null,
        null
      ),
      getItem(<Link href={`${path}/elements/upload`}>{t('Upload')}</Link>, 'upload', null, null),
    ]),
    getItem(t('charts'), 'charts', !topMenu && <UilChartBar />, [
      getItem(
        <Link href={`${path}/charts/chartjs`}>
          {t('Chart')} {t('JS')}
        </Link>,
        'chartjs',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/charts/google-chart`}>
          {t('Google')} {t('Chart')}
        </Link>,
        'google-chart',
        null,
        null
      ),
      getItem(t('Recharts'), 'recharts', !topMenu && <UilChartBar />, [
        getItem(
          <Link href={`${path}/charts/recharts/bar`}>
            {t('Bar')} {t('Chart')}
          </Link>,
          'bar',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/area`}>
            {t('Area')} {t('Chart')}
          </Link>,
          'area',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/composed`}>
            {t('Composed')} {t('Chart')}
          </Link>,
          'composed',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/line`}>
            {t('Line')} {t('Chart')}
          </Link>,
          'line',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/pie`}>
            {t('Pie')} {t('Chart')}
          </Link>,
          'pie',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/radar`}>
            {t('Radar')} {t('Chart')}
          </Link>,
          'radar',
          null,
          null
        ),
        getItem(
          <Link href={`${path}/charts/recharts/radial`}>
            {t('Radial')} {t('Charts')}
          </Link>,
          'radial',
          null,
          null
        ),
      ]),
      getItem(
        <Link href={`${path}/charts/peity`}>
          {t('Peity')} {t('Charts')}
        </Link>,
        'peity',
        null,
        null
      ),
    ]),
    getItem(t('forms'), 'forms', !topMenu && <UilCompactDisc />, [
      getItem(
        <Link href={`${path}/forms/form-layout`}>
          {t('Form')} {t('Layouts')}
        </Link>,
        'form-layout',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/forms/form-elements`}>
          {t('Form')} {t('Elements')}
        </Link>,
        'form-elements',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/forms/form-components`}>
          {t('Form')} {t('Components')}
        </Link>,
        'form-components',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/forms/form-validation`}>
          {t('Form')} {t('Validation')}
        </Link>,
        'form-validation',
        null,
        null
      ),
    ]),
    getItem(t('table'), 'table', !topMenu && <UilTable />, [
      getItem(
        <Link href={`${path}/tables/basic`}>
          {t('Basic')} {t('Table')}
        </Link>,
        'basicTable',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/tables/dataTable`}>
          {t('Data')} {t('Table')}
        </Link>,
        'dataTable',
        null,
        null
      ),
    ]),
    getItem(t('widgets'), 'widgets', !topMenu && <UilServer />, [
      getItem(<Link href={`${path}/widgets/chart`}>{t('Chart')}</Link>, 'chart', null, null),
      getItem(<Link href={`${path}/widgets/card`}>{t('Card')}</Link>, 'card', null, null),
      getItem(<Link href={`${path}/widgets/mixed`}>{t('Mixed')}</Link>, 'mixed', null, null),
    ]),
    getItem(t('icons'), 'icons', !topMenu && <UilIcons />, [
      getItem(<Link href={`${path}/icons/unicon`}>{t('Unicon(svg)')}</Link>, 'unicons', null, null),
      getItem(<Link href={`${path}/icons/font-awesome`}>{t('Fontawesome')}</Link>, 'font-awesome', null, null),
      getItem(
        <Link href={`${path}/icons/antd`}>
          {t('Ant')} {t('Design')} {t('Icons')}
        </Link>,
        'antd',
        null,
        null
      ),
    ]),
    getItem(
      <Link href={`${path}/editor`}>{t('Editors')}</Link>,
      'editor',
      !topMenu && (
        <Link className="menuItem-icon" href={`${path}/editor`}>
          <UilEdit />
        </Link>
      ),
      null
    ),
    getItem(t('maps'), 'maps', !topMenu && <UilMap />, [
      getItem(
        <Link href={`${path}/maps/google`}>
          {t('Google')} {t('Maps')}
        </Link>,
        'google',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/maps/leaflet`}>
          {t('Leaflet')} {t('Map')}
        </Link>,
        'leaflet',
        null,
        null
      ),
      getItem(
        <Link href={`${path}/maps/vector`}>
          {t('Simple')} {t('Map')}
        </Link>,
        'vector',
        null,
        null
      ),
    ]),
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
