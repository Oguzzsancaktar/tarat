import {
  Anchor,
  H1,
  Image,
  Label,
  Paragraph,
  Progress,
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

import { Input } from '@my/ui/src/input'

export default function MailRegisterScreen() {
  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <Progress width={'$20'} size={'$4'} backgroundColor="$red10" value={10}>
        <Progress.Indicator backgroundColor={'$blue10'} animation="bouncy" />
      </Progress>

      <YStack maw={600}>
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Email" />
      </YStack>

      {/* <YStack alignItems="center">
        <Paragraph maxWidth={'$25'} mb="$4" maw={'$20'} ta="center">
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna.
        </Paragraph>
        <Button {...loginLinkProps} mb="$2.5" size="large" background="green">
          Giriş Yap
        </Button>
        <Button {...registerLinkProps} size="large" background="blue">
          Kayıt Ol
        </Button>
      </YStack> */}
    </YStack>
  )
}
