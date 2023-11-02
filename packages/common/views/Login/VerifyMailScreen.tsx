import React, { useState } from 'react'
import { Button, Paragraph, YStack, H4, XStack, Square } from '@packages/ui'
import { Card, Input } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ArrowLeft } from '@tamagui/lucide-icons'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  const resetLinkProps = useLink({
    href: '/login/reset',
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

      <YStack mb={200} jc={'center'} ai={'center'}>
        <Card ai={'center'} backgroundColor="$gray4" h={502} w={358}>
          <YStack>
            <YStack>
              <YStack jc={'center'} ai={'center'}>
                <H4 mt={35}>Mail Doğrulaması</H4>
                <Paragraph mb={30} color={'gray'} size={'$1'}>
                  Kodunuzu e-posta adresinize gönderdik.{' '}
                </Paragraph>
                <Paragraph mb={30} color={'gray'} size={'$1'}>
                  gokhan*****@gmail.com
                </Paragraph>
                <XStack mb={50}>
                  <Square borderRadius={15} size={60} backgroundColor="$backgroundTransparent" />
                  <Square
                    ml={15}
                    borderRadius={15}
                    size={60}
                    backgroundColor="$backgroundTransparent"
                  />
                  <Square
                    ml={15}
                    borderRadius={15}
                    size={60}
                    backgroundColor="$backgroundTransparent"
                  />
                  <Square
                    ml={15}
                    borderRadius={15}
                    size={60}
                    backgroundColor="$backgroundTransparent"
                  />
                </XStack>
                <YStack>
                  {/* @todo */}
                  <Paragraph ta={'left'}>(03:15)</Paragraph>
                </YStack>
              </YStack>
            </YStack>
            <YStack>
              <Button
                {...resetLinkProps}
                mb={10}
                h={66}
                w={300}
                color="white"
                backgroundColor="#F8B401"
              >
                Doğrula
              </Button>
            </YStack>
            <YStack>
              <Button h={66} w={300} color="#F8B401" backgroundColor="#F8B40110">
                Tekrar Gönder
              </Button>
            </YStack>
          </YStack>
        </Card>
      </YStack>
    </YStack>
  )
}
