import { Image, Paragraph, YStack } from '@my/ui'
// import { Apple, Facebook, MailPlus, ArrowLeftCircle } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Button } from '@my/ui/src/components'
import { Dimensions } from 'react-native'
import { useAppImages } from 'app/hooks'

export default function LoginScreen() {
  const appImages = useAppImages()
  const mailLoginLinkProps = useLink({
    href: '/login/mail',
  })

  const loginLinkProps = useLink({
    href: '/QrPage',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })
  const welcomeLinkProps = useLink({
    href: '/welcome',
  })
  const QrPageLinkProps = useLink({
    href: '/qrpage',
  })

  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          {/* <ArrowLeftCircle {...welcomeLinkProps} size={'$3'} color={'$gray11'} /> */}
        </YStack>

        <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />
      </YStack>

      <YStack alignItems="center">
        <Button {...loginLinkProps} mb="$2.5" size="large" background="black">
          Apple ile giriş yap
        </Button>

        <Button {...loginLinkProps} mb="$2.5" size="large" background="red">
          Google ile giriş yap
        </Button>

        <Button {...registerLinkProps} size="large" background="blue">
          Facebook ile giriş yap
        </Button>

        <Paragraph size={'$2'} maxWidth={'$25'} my="$5" maw={'$20'} ta="center">
          yada
        </Paragraph>

        <Button {...mailLoginLinkProps} mb="$4" size="large" background="gray">
          E-posta ile giriş yap
        </Button>

        <Paragraph
          size={'$2'}
          bottom={-10}
          color={'$gray8'}
          maxWidth={'$25'}
          maw={'$20'}
          ta="center"
        >
          Uygulamaya giriş yaparak kullanım şartlarını kabul etmiş sayılırsınız.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
