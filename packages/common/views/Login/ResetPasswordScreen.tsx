import React from 'react'
import { H1, Paragraph, Separator, XStack, YStack, Anchor, View } from '@packages/ui'
import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { ButtonGoBack, InputWithIcon, ScreenContainer } from '../../components'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'
import PasswordSuccessScreen from './PasswordSuccessScreen'

export default function ResetPasswordScreen() {
  const successLinkProps = useLink({
    href: '/login/loginSuccess',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW jc={'space-between'}>
        <YStackFullW>
          <H1 mb={'$space.4'} color={'$heading'} fontFamily={'$body'} fontSize={30}>
            Şifrenizi {'\n'}Sıfırlayın
          </H1>

          <InputWithIcon error={false} success={true} icon="mail" value={''} placeholder="Şifre" />
          <View mt={'$space.2'}>
            <InputWithIcon
              error={false}
              success={true}
              icon="mail"
              value={''}
              placeholder="Şifre Tekrar"
            />
          </View>
        </YStackFullW>

        <YStackFullW mt={'$space.4'}>
          <Button {...successLinkProps} mb={'$4'}>
            SIFIRLA
          </Button>
        </YStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
