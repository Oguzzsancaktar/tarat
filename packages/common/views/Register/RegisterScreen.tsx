import React, { useState } from 'react'
import { H1, Paragraph, Separator, XStack, YStack } from '@packages/ui'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'

import { ArrowLeft, Facebook, MailPlus } from '@tamagui/lucide-icons'
import { ScreenContainer, SocialSign } from '@packages/common/components'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })

  const successLinkProps = useLink({
    href: '/register/success',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack>
        <YStack>
          <YStack>
            <H1 color={'$heading'}>Yeni Hesap {'\n'} Oluştur </H1>
          </YStack>
          <Input placeholder="Kullanıcı adı" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
          <Input placeholder="E-posta" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
        <YStack>
          <Input placeholder="Şifre" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
        <YStack>
          <Input placeholder="Şifre Tekrar" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
      </YStack>

      <YStack>
        <Button {...successLinkProps} mb={'$4'}>
          Kaydol
        </Button>
        <SocialSign type="login" />
      </YStack>
    </ScreenContainer>
  )
}
