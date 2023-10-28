import { Label, Paragraph, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
// import { ArrowLeftCircle } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'

export default function MailLoginScreen() {
  const registerLinkProps = useLink({
    href: '/register',
  })
  const loginLinkProps = useLink({
    href: '/login',
  })
  const settingsLinkProps = useLink({
    href: '/settings',
  })
  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          {/* <ArrowLeftCircle {...loginLinkProps} size={'$3'} color={'$gray11'} /> */}
        </YStack>

        {/* <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" /> */}
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
          <Button {...settingsLinkProps} mt="$5" background="red">
            Giriş yap
          </Button>
        </YStack>
      </YStack>

      <YStack jc={'center'} ai={'center'}>
        <Paragraph size={'$3'} mb={'$2'}>
          Henüz bir hesabın yok mu?
        </Paragraph>
        <Button {...registerLinkProps} background="gray">
          Kayıt ol
        </Button>
      </YStack>
    </YStack>
  )
}
