import { Image, Label, Paragraph, YStack } from '@packages/ui'
import { Button, Input } from '@packages/ui/src/components'
// import { ArrowLeftCircle } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'

export default function MailLoginScreen() {
  const appImages = useAppImages()
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
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          {/* <ArrowLeftCircle {...loginLinkProps} size={'$3'} color={'$gray11'} /> */}
        </YStack>

        <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="emailLog" size={'$1'} mb={'$1.5'} color={'$gray8'}>
            E-posta adresi
          </Label>
          <Input background="gray" mb={'$5'} />
        </YStack>
        <YStack>
          <Label htmlFor="passwordLog" size={'$1'} mb={'$1.5'} color={'$gray8'}>
            Şifre
          </Label>
          <Input background="gray" />
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
