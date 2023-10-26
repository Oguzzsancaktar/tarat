import { Anchor, H1, Image, Label, Paragraph, Progress, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function MailRegisterScreen() {
  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="E-Posta">E-Posta</Label>
          <Input width={400} placeholder="E-Posta" background="lightBlue" />
        </YStack>
        <YStack>
          <Label htmlFor="password">Şifre</Label>
          <Input width={400} placeholder="Şifre" background="lightBlue" />
        </YStack>
        <YStack>
          <Label htmlFor="password">Şifre Tekrar</Label>
          <Input width={400} placeholder="Şifre Tekrar" background="lightBlue" />
        </YStack>
        <YStack width={400} ai={'center'} mt={'$3'}>
          <Progress size={'$4'} backgroundColor="gray" value={40}>
            <Progress.Indicator backgroundColor={'$green10'} animation="slow" />
          </Progress>
        </YStack>
        <YStack>
          <Paragraph maw={400} color={'gray'} fontSize={11}>
            Harf, sayı ve simgelerin karışımından oluşan 8 veya daha fazla karakter kullanın.
          </Paragraph>
        </YStack>
        <Button mb="$2.5" size="large" background="blue">
          Şimdi ücretsiz başlayın!
        </Button>
      </YStack>
    </YStack>
  )
}
