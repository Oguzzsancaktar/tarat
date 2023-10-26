import { Image, Paragraph, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
import { Apple, Facebook, MailPlus } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function LoginScreen() {
  const mailRegisterLinkProps = useLink({
    href: '/register/mail',
  })

  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack alignItems="center">
        <Button mb="$2.5" size="large" background="black" icon={<Apple size="$1" />}>
          Apple ile kaydol
        </Button>

        <Button mb="$2.5" size="large" background="white" icon={<MailPlus size="$1" />}>
          Google ile kaydol
        </Button>

        <Button size="large" background="blue" icon={<Facebook size="$1" />}>
          Facebook ile kaydol
        </Button>

        <Paragraph my="$5" maw={'$20'} ta="center">
          OR
        </Paragraph>

        <Button {...mailRegisterLinkProps} mb="$4" size="large" background="gray">
          E-posta ile kaydol
        </Button>

        <Paragraph maw={'$20'} color="gray" fontSize={12} ta="center">
          Uygulamaya kaydolarak kullanım şartlarını kabul etmiş sayılırısınız.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
