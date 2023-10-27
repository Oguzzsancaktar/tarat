import { Image, Paragraph, YStack } from '@my/ui'
import { Apple, Facebook, MailPlus, ArrowLeftCircle } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Button } from '@my/ui/src/components'
import { Dimensions } from 'react-native'

export default function LoginScreen() {
  const mailLoginLinkProps = useLink({
    href: '/login/mail',
  })

  const loginLinkProps = useLink({
    href: '/login',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })
  const welcomeLinkProps = useLink({
    href: '/welcome',
  })

  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          <ArrowLeftCircle {...welcomeLinkProps} size={'$3'} color={'$gray11'} />
        </YStack>

        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack alignItems="center">
        <Button
          {...loginLinkProps}
          mb="$2.5"
          size="large"
          background="black"
          icon={<Apple size="$1" />}
        >
          Apple ile giriş yap
        </Button>

        <Button
          {...loginLinkProps}
          mb="$2.5"
          size="large"
          background="red"
          icon={<MailPlus size="$1" />}
        >
          Google ile giriş yap
        </Button>

        <Button {...registerLinkProps} size="large" background="blue" icon={<Facebook size="$1" />}>
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
