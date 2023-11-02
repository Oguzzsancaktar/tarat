import React from 'react'
import { H1, Input, Button, Paragraph, Separator, XStack, YStack, Anchor } from '@packages/ui'
import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { ButtonGoBack } from '../../components'

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
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack position="absolute" zIndex={99999} top={'$20'} left={'$5'}>
        <ButtonGoBack />
      </YStack>

      <YStack>
        <YStack>
          <YStack>
            <H1 mt={80} mb={30}>
              Hesabınıza Giriş Yapın
            </H1>
          </YStack>
          <Input placeholder="E-posta" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
        <YStack>
          <Input placeholder="Şifre" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$1'} />
        </YStack>
        <YStack jc={'flex-end'} ai={'flex-end'}>
          <Anchor {...forgetLinkProps}>
            <Paragraph color={'gray'}>Şifreni mi unuttun?</Paragraph>
          </Anchor>
        </YStack>
      </YStack>

      <YStack>
        <Button
          {...loginSuccessLinkProps}
          h={66}
          w={358}
          mt={150}
          mb={'$4'}
          backgroundColor="#F8B401"
        >
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
      </YStack>
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
    </YStack>
  )
}
