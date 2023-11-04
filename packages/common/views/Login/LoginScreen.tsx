import React from 'react'
import { H1, Paragraph, Separator, XStack, YStack, Anchor, View } from '@packages/ui'
import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { ButtonGoBack, InputWithIcon, ScreenContainer, SocialSign } from '../../components'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'

export default function LoginScreen() {
  const forgetLinkProps = useLink({
    href: '/login/forget',
  })

  const loginSuccessLinkProps = useLink({
    href: '/login/loginSuccess',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW>
          <H1 color={'$heading'} fontFamily={'$body'} fontSize={30}>
            Hesabınıza Giriş {'\n'}Yapın
          </H1>

          <InputWithIcon
            error={false}
            success={true}
            icon="apple"
            value={''}
            placeholder="E-posta"
          />
          <View mt={'$space.2'}>
            <InputWithIcon error={false} success={true} icon="key" value={''} placeholder="Şifre" />
          </View>
          <Paragraph {...forgetLinkProps} textAlign="right" color={'gray'}>
            Şifreni mi unuttun?
          </Paragraph>
        </YStackFullW>

        <YStackFullW>
          <Button {...loginSuccessLinkProps} mb={'$4'}>
            Giriş yap
          </Button>
          <SocialSign type="register" />
        </YStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
