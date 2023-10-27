import { Image, Paragraph, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
import { Apple, ArrowLeftCircle, Facebook, MailPlus } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'

export default function LoginScreen() {
  const mailRegisterLinkProps = useLink({
    href: '/register/mail',
  })
  const welcomeLinkProps = useLink({
    href: '/welcome',
  })

  return (
    <YStack backgroundColor={'#1c1c23'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          <ArrowLeftCircle {...welcomeLinkProps} size={'$3'} color={'$gray11'} />
        </YStack>

        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <YStack alignItems="center">
        <Button mb="$2.5" size="large" background="black" icon={<Apple size="$1" />}>
          Apple ile kayıt ol
        </Button>

        <Button mb="$2.5" size="large" background="red" icon={<MailPlus size="$1" />}>
          Google ile kayıt ol
        </Button>

        <Button size="large" background="blue" icon={<Facebook size="$1" />}>
          Facebook ile kayıt ol
        </Button>

        <Paragraph size={'$2'} maxWidth={'$25'} my="$5" maw={'$20'} ta="center">
          yada
        </Paragraph>

        <Button {...mailRegisterLinkProps} mb="$4" size="large" background="gray">
          E-posta ile kayıt ol
        </Button>

        <Paragraph
          size={'$2'}
          bottom={-10}
          color={'$gray8'}
          maxWidth={'$25'}
          maw={'$20'}
          ta="center"
        >
          Uygulamaya kayıt olarak kullanım şartlarını kabul etmiş sayılırsınız.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
