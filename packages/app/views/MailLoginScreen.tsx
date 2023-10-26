import { Anchor, H1, Image, Label, Paragraph, Progress, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function MailLoginScreen() {
  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="E-posta">E-posta</Label>
          <Input width={400} placeholder="E-posta" background="lightBlue" />
        </YStack>
        <YStack>
          <Label htmlFor="password">Şifre</Label>
          <Input width={400} placeholder="Şifre" background="lightBlue" />
        </YStack>
        <YStack jc={'center'} ai={'center'}>
          <Button mt="$5" mb="$2.5" size="large" background="blue">
            Giriş
          </Button>
        </YStack>
      </YStack>
    </YStack>
  )
}
