import {
  Anchor,
  H1,
  Image,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  View,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, Facebook, MailPlus } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Apple } from '@tamagui/lucide-icons'
import { Button } from '@my/ui/src/components'

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

  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
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
          background="white"
          icon={<MailPlus size="$1" />}
        >
          Google ile giriş yap
        </Button>

        <Button {...registerLinkProps} size="large" background="blue" icon={<Facebook size="$1" />}>
          Facebook ile giriş yap
        </Button>

        <Paragraph my="$5" maw={'$20'} ta="center">
          OR
        </Paragraph>

        <Button {...mailLoginLinkProps} mb="$4" size="large" background="gray">
          E-posta ile giriş yap
        </Button>

        <Paragraph maw={'$20'} color="gray" fontSize={12} ta="center">
          Uygulamaya giriş yaparak kullanım şartlarını kabul etmiş sayılırısınız.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
