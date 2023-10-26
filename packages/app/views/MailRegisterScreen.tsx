import { Image, Label, Paragraph, Progress, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function MailRegisterScreen() {
  return (
    <YStack backgroundColor={'#1c1c23'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="email" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            E-posta adresi
          </Label>
          <Input width={350} background="gray" mb={'$4'} />
        </YStack>
        <YStack>
          <Label htmlFor="password" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            Şifre
          </Label>
          <Input width={350} background="gray" mb={'$4'} />
        </YStack>
        <YStack>
          <Label htmlFor="re-password" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            Şifre Tekrar
          </Label>
          <Input width={350} background="gray" />
        </YStack>
        <YStack ai={'center'}>
          <Progress mt={'$5'} width={'$20'} size={'$1'} backgroundColor="$gray8" value={25}>
            <Progress.Indicator backgroundColor={'$green9'} animation="bouncy" />
          </Progress>
          <Paragraph size={'$1'} color={'$gray8'}>
            Şifre uzunluğu 8 karakterden az olamaz!
          </Paragraph>
        </YStack>
      </YStack>

      <YStack jc={'center'} ai={'center'}>
        <Button size="large" background="red">
          Kayıt ol
        </Button>
      </YStack>
    </YStack>
  )
}
