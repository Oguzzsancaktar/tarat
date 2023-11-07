import { H4, Paragraph, XStack, YStack } from '@packages/ui'
import React from 'react'
import { Button, Card, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'

export default function QrList() {
  return (
    <YStack>
      {/* @todo oğuz 13.satır background $inputBackground gelmiyor ya da başka bir sorun var */}
      <Card
        w={'100%'}
        h={178}
        backgroundColor={'$color.textGray'}
        borderBottomLeftRadius={'$borderRadius.7'}
        borderBottomRightRadius={'$borderRadius.7'}
        borderTopLeftRadius={'$borderRadius.0'}
        borderTopRightRadius={'$borderRadius.0'}
      >
        <XStackFullW mt="$space.15">
          {/* Aktif QR */}
          <Card
            ai={'center'}
            w={119}
            h={67}
            backgroundColor={'$orange'}
            borderRadius={'$borderRadius.5'}
          >
            <Paragraph color="$heading">Aktif QR</Paragraph>
            <Paragraph color="$white">12</Paragraph>
          </Card>
          {/* Pasif QR */}
          <Card
            ml="$space.4"
            ai={'center'}
            w={119}
            h={67}
            backgroundColor={'$orange'}
            borderRadius={'$borderRadius.3'}
          >
            <Paragraph color="$heading">Pasif QR</Paragraph>
            <Paragraph color="$white">12</Paragraph>
          </Card>

          {/* Aktif QR */}
          <Card
            ml="$space.4"
            ai={'center'}
            w={119}
            h={67}
            backgroundColor={'$orange'}
            borderRadius={'$borderRadius.3'}
          >
            <Paragraph color="$heading">Silinen QR</Paragraph>
            <Paragraph color="$white">12</Paragraph>
          </Card>
        </XStackFullW>
      </Card>

      <ScreenContainer horizontalPadding={true} verticalPadding={false} showGoBackButton={false}>
        <YStackFullW ai={'center'} style={{ height: '100%', width: '100%' }}>
          <Card ai={'flex-start'} h={'$10'} backgroundColor={'$inputBackground'}>
            <XStack ai="center" jc="space-between">
              <Button backgroundColor={'$color.orange'} h="$7" w="50%">
                Aktif QR
              </Button>
              <Paragraph ml="$10">Pasif QR</Paragraph>
            </XStack>
          </Card>
        </YStackFullW>
      </ScreenContainer>
    </YStack>
  )
}
