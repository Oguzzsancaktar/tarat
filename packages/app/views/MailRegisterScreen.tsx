import React, { useState } from 'react'
import { Label, Paragraph, Progress, YStack } from '@my/ui'
import { Button, Input } from '@my/ui/src/components'
// import { ArrowLeftCircle } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'

export default function MailRegisterScreen() {
  const registerLinkProps = useLink({
    href: '/register',
  })
  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          {/* <ArrowLeftCircle {...registerLinkProps} size={'$3'} color={'$gray11'} /> */}
        </YStack>

        {/* <Image src={'../assets/logo.png'} /> */}
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="emailReg" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            E-posta adresi
          </Label>
          <Input background="gray" mb={'$4'} />
        </YStack>
        <YStack>
          <Label htmlFor="passwordReg" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            Şifre
          </Label>
          <Input background="gray" mb={'$4'} />
        </YStack>
        <YStack>
          <Label htmlFor="re-passwordReg" size={'$1'} color={'$gray8'} mb={'$1.5'}>
            Şifre Tekrar
          </Label>
          <Input background="gray" />
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
