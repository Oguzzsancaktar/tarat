import React, { useState } from 'react'
import {
  Avatar,
  H1,
  Image,
  Label,
  Button,
  Paragraph,
  Progress,
  Separator,
  XStack,
  YStack,
} from '@packages/ui'
import { Input } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ArrowLeft, Facebook, MailPlus, User } from '@tamagui/lucide-icons'
import { color } from '@tamagui/themes'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          <Button
            icon={<ArrowLeft />}
            {...registerLinkProps}
            w={50}
            h={50}
            mt={'$3'}
            ml={'$3'}
            backgroundColor="#F8B40120"
            color={'#F8B401'}
          />
        </YStack>
      </YStack>

      <YStack>
        <YStack>
          <YStack>
            <H1 mt={80} mb={80}>
              Yeni Hesap {'         '} Oluştur
            </H1>
          </YStack>
          <Input placeholder="Kullanıcı adı" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
          <Input placeholder="E-posta" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
        <YStack>
          <Input placeholder="Şifre" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
        <YStack>
          <Input placeholder="Şifre Tekrar" w={358} h={66} backgroundColor={'#F5F5F5'} mb={'$4'} />
        </YStack>
      </YStack>

      <YStack>
        <Button h={66} w={358} mb={'$4'} backgroundColor="#F8B401">
          Kayıt ol
        </Button>
        <XStack jc="center">
          <Paragraph size={'$3'} color={'$gray8'}>
            Zaten bir hesabınız var mı?{' '}
          </Paragraph>
          <Paragraph size={'$3'} color={'#D62828'}>
            Giriş Yap
          </Paragraph>
        </XStack>
        <Separator mt="$2" width={358} />
        <YStack mt="$2">
          <Paragraph ta="center" size={'$3'} color={'$gray8'}>
            Sosyal Medya ile devam et
          </Paragraph>
        </YStack>
      </YStack>
      <XStack mt={'$6'} ai="center" jc="space-between">
        <Button
          color="white"
          backgroundColor={'$blue11'}
          mr={10}
          icon={<Facebook />}
          borderRadius={50}
        ></Button>
        <Button
          color="white"
          backgroundColor={'#D62828'}
          ml={10}
          icon={<MailPlus />}
          borderRadius={50}
        ></Button>
      </XStack>
    </YStack>
  )
}
