import React, { useState } from 'react'
import { H1, Paragraph, Separator, XStack, YStack } from '@packages/ui'
import { Button, Input, YStackFullW } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'

import { ArrowLeft, Facebook, MailPlus } from '@tamagui/lucide-icons'
import { ScreenContainer } from '@packages/common/components'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  const welcomeLinkProps = useLink({
    href: '/',
  })
  const successLinkProps = useLink({
    href: '/register/success',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack>
        <YStack>
          <YStack>
            <H1 color={'$heading'}>Yeni Hesap {'\n'} Oluştur </H1>
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
        <Button {...successLinkProps} backgroundColor="#F8B401">
          Kaydol
        </Button>
        <XStack jc="center">
          <Paragraph size={'$3'} color={'$textGray'}>
            Zaten bir hesabınız var mı?{' '}
          </Paragraph>
          <Paragraph {...loginLinkProps} size={'$3'} color={'$red'}>
            Giriş Yap
          </Paragraph>
        </XStack>
        <Separator borderColor={'$textGray'} mt="$2" width={358} />
        <YStack mt="$2">
          <Paragraph ta="center" size={'$3'} color={'$textGray'}>
            Sosyal Medya ile devam et
          </Paragraph>
        </YStack>
      </YStack>

      <XStack ai="center" jc="center">
        <Button
          color="white"
          w={'$10'}
          backgroundColor={'$blue11'}
          mr={10}
          icon={<Facebook />}
          borderRadius={50}
        ></Button>
        <Button
          color="white"
          w={'$10'}
          backgroundColor={'#D62828'}
          ml={10}
          icon={<MailPlus />}
          borderRadius={50}
        ></Button>
      </XStack>
    </ScreenContainer>
  )
}
