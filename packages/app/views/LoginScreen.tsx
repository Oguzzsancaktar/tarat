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
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

import { Button } from '@my/ui/src/button'

export default function LoginScreen() {
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
        <Button {...loginLinkProps} mb="$2.5" size="large" background="green">
          Sign up with Apple
        </Button>

        <Button {...loginLinkProps} mb="$2.5" size="large" background="green">
          Sign up with Google
        </Button>

        <Button {...registerLinkProps} size="large" background="blue">
          Sign up with Facebook
        </Button>

        <Paragraph maxWidth={'$25'} my="$5" maw={'$20'} ta="center">
          OR
        </Paragraph>

        <Button {...registerLinkProps} mb="$4" size="large" background="blue">
          Sign up with E-mail
        </Button>

        <Paragraph maxWidth={'$25'} maw={'$20'} ta="center">
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
