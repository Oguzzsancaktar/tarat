import { Image, Label, Paragraph, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function MailLoginScreen() {
  const registerLinkProps = useLink({
    href: '/register',
  })
  return (
    <YStack backgroundColor={'#1c1c23'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="email" size={'$1'} mb={'$1.5'} color={'$gray8'}>
            E-posta adresi
          </Label>
          <Input width={350} background="gray" mb={'$5'} />
        </YStack>
        <YStack>
          <Label htmlFor="password" size={'$1'} mb={'$1.5'} color={'$gray8'}>
            Şifre
          </Label>
          <Input width={350} background="gray" />
        </YStack>

        <YStack jc={'center'} ai={'center'}>
          <Button mt="$5" background="red">
            Giriş yap
          </Button>
        </YStack>
      </YStack>

      <YStack jc={'center'} ai={'center'}>
        <Paragraph>Henüz bir hesabın yok mu?</Paragraph>
        <Button {...registerLinkProps} background="gray">
          Kayıt ol
        </Button>
      </YStack>
    </YStack>
  )
}
