import React from 'react'
import { H1, Paragraph, Text, YStack } from '@packages/ui'

import { Dimensions } from 'react-native'
import { RatioButton, ScreenContainer } from '@packages/common/components'
import { Button, YStackFullW } from '@packages/ui/src/components'

export default function ForgetPasswordScreen() {
  // const registerLinkProps = useLink({
  //   href: '/register',
  // })
  // const verifyLinkProps = useLink({
  //   href: '/login/verifyMail',
  // })
  // const verifyPhoneLinkProps = useLink({
  //   href: '/login/verifyPhone',
  // })
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW jc="space-between" ai="center">
        <YStack>
          <H1 color={'$heading'}> Şifremi Unuttum</H1>
          <Paragraph color={'$textGray'}>
            Şifrenizi sıfırlamak için hangi iletişim bilgilerini kullanmamız gerektiğini seçin.
          </Paragraph>
        </YStack>

        <RatioButton Title={'E-posta'} Description={'Kodu Gönder'} />
        <RatioButton Title={'Telefon'} Description={'Kodu Gönder'} />
        <Button>DEVAM ET</Button>
      </YStackFullW>
    </ScreenContainer>
  )
}
