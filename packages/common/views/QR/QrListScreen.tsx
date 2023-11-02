import React, { useState } from 'react'
import { Button, Paragraph, YStack, H4, XStack, Square, Avatar } from '@packages/ui'
import { Card, Input } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ArrowLeft, Car, Check } from '@tamagui/lucide-icons'

export default function QrListScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const welcomeLinkProps = useLink({
    href: '/',
  })
  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack>
          <Card
            backgroundColor={'#E4E4E4'}
            borderBottomLeftRadius={24}
            borderBottomRightRadius={24}
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            w={428}
            h={172}
            x={0}
            y={0}
          >
            <XStack jc={'center'} ai={'center'}>
              <Card
                ai={'center'}
                w={119}
                h={67}
                y={45}
                mr={10}
                borderRadius={16}
                backgroundColor={'#F8B40140'}
              >
                <Paragraph>Aktif QR</Paragraph>
                <Paragraph color={'whitesmoke'}>12</Paragraph>
              </Card>

              <Card
                ai={'center'}
                w={119}
                h={67}
                y={45}
                borderRadius={16}
                backgroundColor={'#F8B40140'}
              >
                <Paragraph>Pasif QR</Paragraph>
                <Paragraph color={'whitesmoke'}>12</Paragraph>
              </Card>

              <Card
                ai={'center'}
                w={119}
                h={67}
                y={45}
                ml={10}
                borderRadius={16}
                backgroundColor={'#F8B40140'}
              >
                <Paragraph>Silinmiş QR</Paragraph>
                <Paragraph color={'whitesmoke'}>12</Paragraph>
              </Card>
            </XStack>
          </Card>

          <YStack>
            <Card w={373} h={50} backgroundColor="#F5F5F5" borderRadius={16}></Card>
          </YStack>
        </YStack>
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          <Button
            icon={<ArrowLeft />}
            {...welcomeLinkProps}
            w={50}
            h={50}
            mt={'$3'}
            ml={'$3'}
            backgroundColor="#F8B40120"
            color={'#F8B401'}
          />
        </YStack>
      </YStack>
    </YStack>
  )
}
