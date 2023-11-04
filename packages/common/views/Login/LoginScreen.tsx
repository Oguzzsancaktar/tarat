import React from 'react'
import { H1, Paragraph, Separator, XStack, YStack, Anchor } from '@packages/ui'
import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { ButtonGoBack, ScreenContainer } from '../../components'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'

export default function MailRegisterScreen() {
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
      <YStackFullW jc="space-between" ai="center">
        <YStackFullW>
          <H1 fontFamily={'$body'} fontSize={30}>
            Hesabınıza Giriş {'\n'}Yapın
          </H1>

          <Input placeholder="E-posta" backgroundColor={'#F5F5F5'} mb={'$4'} />
          <Input placeholder="Şifre" backgroundColor={'#F5F5F5'} mb={'$1'} />

          <Paragraph {...forgetLinkProps} textAlign="right" color={'gray'}>
            Şifreni mi unuttun?
          </Paragraph>
        </YStackFullW>

        <YStackFullW>
          <Button {...loginSuccessLinkProps} mb={'$4'}>
            Giriş yap
          </Button>
          <XStack jc="center">
            <Paragraph size={'$3'} color={'$gray8'}>
              Hesabınız yok mu?{' '}
            </Paragraph>
            <Paragraph {...registerLinkProps} size={'$3'} color={'#D62828'}>
              Kayıt Ol
            </Paragraph>
          </XStack>
          <Separator mt="$2" width={358} />
          <YStack mt="$2">
            <Paragraph ta="center" size={'$3'} color={'$gray8'}>
              Sosyal Medya ile devam et
            </Paragraph>
          </YStack>
        </YStackFullW>
        <XStack ai="center" jc="space-between">
          <Button
            color="white"
            backgroundColor={'$blue11'}
            mr={10}
            icon={<Facebook />}
            borderRadius={50}
          ></Button>
          <Button
            color="white"
            backgroundColor={'#D62828'}
            ml={10}
            icon={<MailPlus />}
            borderRadius={50}
          ></Button>
        </XStack>
      </YStackFullW>
    </ScreenContainer>
  )
}
