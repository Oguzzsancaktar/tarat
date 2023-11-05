import React, { useState } from 'react'
import { H1, View, YStack } from '@packages/ui'
import { Button, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'

import { ArrowLeft, Facebook, MailPlus } from '@tamagui/lucide-icons'
import { InputWithIcon, ScreenContainer, SocialSign } from '@packages/common/components'

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
      <YStackFullW style={{ height: '100%' }} jc={'space-between'}>
        <H1 color={'$heading'}>Yeni Hesap {'\n'} Oluştur </H1>

        <YStackFullW>
          <InputWithIcon
            error={false}
            success={false}
            value=""
            icon="key"
            placeholder="Kullanıcı adı"
          />
          <View mt={'$space.3'}>
            <InputWithIcon
              error={false}
              success={false}
              value=""
              icon="key"
              placeholder="E-Posta"
            />
          </View>
          <View mt={'$space.3'}>
            <InputWithIcon error={false} success={false} value="" icon="key" placeholder="Şifre" />
          </View>
          <View mt={'$space.3'}>
            <InputWithIcon
              error={false}
              success={false}
              value=""
              icon="key"
              placeholder="Şifre Tekrar"
            />
          </View>
        </YStackFullW>

        <YStack mt={'$space.3'}>
          <Button mb={'$4'} {...successLinkProps}>
            Kaydol
          </Button>
          <SocialSign type="login" />
        </YStack>
      </YStackFullW>
    </ScreenContainer>
  )
}
