import React, { useState } from 'react'
import { Anchor, Stack, Text, View, XStack } from '@packages/ui'
import { LoginButton, RegisterButton } from '@packages/common/components'
import { useAppImages } from '@packages/common/hooks'

import { map } from 'lodash'
import Image from 'next/image'

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
  return (
    <nav style={{ width: '100vw', position: 'fixed', top: 0, zIndex: 2 }}>
      <XStack justifyContent="space-between" ai={'center'} padding="$5">
        <Image
          alt="Logo"
          width={appImages.companyLogo.width}
          height={appImages.companyLogo.height}
          // @todo -> make it interface
          src={(appImages.companyLogo as { uri: string; width: number; height: number }).uri}
        />

        <XStack ai={'center'}>
          {map(MENU_LIST, (item, idx) => (
            <Anchor key={idx} mr="$2" href={item.href}>
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
