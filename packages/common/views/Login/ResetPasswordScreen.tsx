import React from 'react'
import { H1, View } from '@packages/ui'
import { useLink } from 'solito/link'
import { InputWithIcon, ScreenContainer } from '../../components'
import { Button, YStackFullW } from '@packages/ui/src/components'

export default function ResetPasswordScreen() {
  const successLinkProps = useLink({
    href: '/login/loginSuccess',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW jc={'space-between'}>
        <YStackFullW>
          <H1 mb={'$space.10'} color={'$heading'} fontFamily={'$body'} fontSize={30}>
            Şifrenizi {'\n'}Sıfırlayın
          </H1>

          <InputWithIcon
            name="password"
            error={false}
            icon="mail"
            value={''}
            placeholder="Şifre"
            onChange={() => {}}
          />
          <View mt={'$space.3'}>
            <InputWithIcon
              name="password"
              error={false}
              icon="mail"
              value={''}
              placeholder="Şifre Tekrar"
              onChange={() => {}}
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
