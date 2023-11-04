import React from 'react'
import { H1, Paragraph, YStack } from '@packages/ui'

import { RatioButton, ScreenContainer } from '@packages/common/components'
import { Button, YStackFullW } from '@packages/ui/src/components'

export default function ForgetPasswordScreen() {
  const [passwordResetType, setPasswordResetType] = React.useState<string>()

  const handleRatioClick = (value: string) => {
    setPasswordResetType(value)
  }

  console.log('passwordResetType', passwordResetType)
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW jc="space-between" ai="center">
        <YStack mb={'$space.5'}>
          <H1 color={'$heading'}> Şifremi Unuttum</H1>
          <Paragraph color={'$textGray'}>
            Şifrenizi sıfırlamak için hangi iletişim bilgilerini kullanmamız gerektiğini seçin.
          </Paragraph>
        </YStack>
        <YStackFullW mb={'$space.2'}>
          <RatioButton
            isSelected={passwordResetType === 'email'}
            handleClick={handleRatioClick}
            value="email"
            title={'E-posta'}
            description={'Kodu Gönder'}
          />
        </YStackFullW>
        <YStackFullW mb={'$space.10'}>
          <RatioButton
            isSelected={passwordResetType === 'phone'}
            handleClick={handleRatioClick}
            value="phone"
            title={'Telefon'}
            description={'Kodu Gönder'}
          />
        </YStackFullW>
        <Button>DEVAM ET</Button>
      </YStackFullW>
    </ScreenContainer>
  )
}
