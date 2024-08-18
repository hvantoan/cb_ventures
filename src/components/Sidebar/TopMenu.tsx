
'use client'
import React, { useLayoutEffect } from 'react'
import Link from 'next/link'
import { TopMenuStyle } from './Style'

function TopMenu() {
  const path = '/landing'

  useLayoutEffect(() => {
    const active: any = document.querySelector('.hexadash-top-menu a.active')
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper')
      const hasSubMenuLeft = active.closest('.has-subMenu-left')
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active')
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active')
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active')
      }
    }
    window.addEventListener('load', active && activeDefault)
    return () => window.removeEventListener('load', activeDefault)
  }, [])

  const addParentActive = (event: any) => {
    document.querySelectorAll('.parent').forEach((element) => {
      element.classList.remove('active')
    })

    const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left')
    const megaMenu = event.currentTarget.closest('.megaMenu-wrapper')
    if (!megaMenu) {
      event.currentTarget.closest('ul').previousSibling?.classList.add('active')
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active')
    } else {
      event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active')
    }
  }

  return (
    <TopMenuStyle >
      <div className="hexadash-top-menu ps-[20px] xl:ps-[10px]">
        <ul className="flex items-center [&>li]:pr-[14px] [&>li>a.active]:text-primary">
          <li>
            <Link href={`${path}`} onClick={addParentActive}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  )
}

export default TopMenu
