import React, { useState } from 'react'
import { Anchor, Image, Stack, Text, View, XStack } from '@packages/ui'
import { LoginButton, RegisterButton } from '@packages/common/components'
import { useAppImages } from '@packages/common/hooks'

import { map } from 'lodash'

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
  const appImages = useAppImages()

  const [navActive, setNavActive] = useState<boolean | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(-1)

  return (
    <nav style={{ width: '100vw', position: 'fixed', top: 0, zIndex: 2 }}>
      <XStack justifyContent="space-between" ai={'center'} padding="$5">
        <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />

        <XStack ai={'center'}>
          {map(MENU_LIST, (item, idx) => (
            <Anchor mr="$2" href={item.href}>
              {item.text}
            </Anchor>
          ))}

          <XStack ml="$3" ai={'center'}>
            <Stack mr="$2">
              <LoginButton size="small" />
            </Stack>
            <RegisterButton size="small" />
          </XStack>
        </XStack>
      </XStack>
    </nav>
  )
}

export default Navbar
