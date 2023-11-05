import React from 'react'
import { H1, Paragraph, View } from '@packages/ui'
import { useLink } from 'solito/link'
import { InputWithIcon, ScreenContainer, SocialSign } from '../../components'
import { Button, YStackFullW } from '@packages/ui/src/components'

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
          <H1 mb={'$space.10'} color={'$heading'}>
            Hesabınıza Giriş {'\n'}Yapın
          </H1>

          <InputWithIcon
            error={false}
            success={true}
            icon="apple"
            value={''}
            placeholder="E-posta"
          />
          <View mt={'$space.3'}>
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
