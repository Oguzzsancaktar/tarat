import React, { useState } from 'react'
import { XStack } from '@packages/ui'
import { LoginButton } from '@packages/common/components'

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
    <nav>
      <XStack>
        Logo navlinks login button
        <LoginButton />
      </XStack>
    </nav>
  )
}

export default Navbar
