import React from 'react'
import { H1, Paragraph, Separator, XStack, YStack, Anchor, View } from '@packages/ui'
import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { ButtonGoBack, InputWithIcon, ScreenContainer } from '../../components'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'

export default function LoginScreen() {
  const forgetLinkProps = useLink({
    href: '/login/forget',
  })

  const loginSuccessLinkProps = useLink({
    href: '/login/loginSuccess',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW jc={'space-between'}>
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
          <XStack jc="center">
            <Paragraph size={'$3'} color={'$textGray'}>
              Hesabınız yok mu?{' '}
            </Paragraph>
            <Paragraph {...registerLinkProps} size={'$3'} color={'#D62828'}>
              Kaydol
            </Paragraph>
          </XStack>
          <Separator borderColor={'$heading'} mt="$2" width={358} />
          <YStack mt="$2">
            <Paragraph color={'$textGray'} ta="center" size={'$3'}>
              Sosyal Medya ile devam et
            </Paragraph>
          </YStack>
          <XStack ai="center" jc="center">
            <Button
              color="white"
              w={'$10'}
              backgroundColor={'$blue11'}
              mr={10}
              icon={<Facebook />}
              borderRadius={50}
            ></Button>
            <Button
              color="white"
              backgroundColor={'#D62828'}
              w={'$10'}
              ml={10}
              icon={<MailPlus />}
              borderRadius={50}
            ></Button>
          </XStack>
        </YStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
