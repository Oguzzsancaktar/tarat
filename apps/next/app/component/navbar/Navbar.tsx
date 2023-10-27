import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'

interface MenuItem {
  text: string
  href: string
}

const MENU_LIST: MenuItem[] = [
  { text: 'Services', href: '/services' },
  { text: 'Privacy Policy', href: '/privacypolicy' },
  { text: 'Terms & Conditions', href: '/terms-and-conditions' },
]

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(-1)

  return (
    <header className="sticky z-30 top-0 bg-white">
      <nav className={`nav ${navActive ? 'active' : ''}`}>
        <Link href={'/'}>
          <a onClick={() => setActiveIdx(-1)}>
            <h1 className="text-xl font-semibold">CodeWithMarish</h1>
          </a>
        </Link>
        <div
          className={`menu__icon ${navActive ? 'active' : 'inactive'}`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu ${navActive ? 'active' : ''}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.href}
            >
              <NavItem text={menu.text} href={menu.href} active={idx === activeIdx} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
