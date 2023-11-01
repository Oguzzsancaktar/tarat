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
import { ArrowLeft, MailPlus, MessageSquare } from '@tamagui/lucide-icons'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  const verifyLinkProps = useLink({
    href: '/login/verifyMail',
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
            <H1 mb={8}>Şifremi Unuttum</H1>
            <Paragraph color={'gray'} size={'$1'}>
              Şifrenizi sıfırlamak için hangi iletişim bilgilerini kullanmamız gerektiğini seçin
            </Paragraph>
          </YStack>
        </YStack>
        <YStack>
          <Button
            jc={'flex-start'}
            ai={'flex-start'}
            icon={<MailPlus size="$2" />}
            w={358}
            h={80}
            pt={15}
            size={'$4'}
            backgroundColor={'$gray4'}
            mt={'$6'}
            mb={'$4'}
          >
            <YStack>
              <Paragraph>Email</Paragraph>
              <Paragraph color={'$gray9'} size={'$1'}>
                Kodu gönder
              </Paragraph>
            </YStack>
          </Button>
        </YStack>
        <YStack>
          <Button
            jc={'flex-start'}
            ai={'flex-start'}
            icon={<MessageSquare size="$2" />}
            w={358}
            h={80}
            pt={15}
            size={'$4'}
            backgroundColor={'$gray4'}
            mb={'$4'}
          >
            <YStack>
              <Paragraph>Telefon</Paragraph>
              <Paragraph color={'$gray9'} size={'$1'}>
                Kodu gönder
              </Paragraph>
            </YStack>
          </Button>
        </YStack>
        <Button {...verifyLinkProps} h={66} w={358} mb={260} backgroundColor="#F8B401">
          Devam et
        </Button>
      </YStack>
    </YStack>
  )
}
