import { H4, Paragraph, XStack, YStack } from '@packages/ui'
import React from 'react'
import { Button, Card, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'
import { UserIcon } from '@packages/common/components/icons'
import { Switch } from '@packages/ui/src/components/switch'

export default function QrListEdit() {
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

          <Card mt="$space.10" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>Kırmızı Mercedes</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>

          <Card mt="$space.3" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>Avcılar Ofis</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>

          <Card mt="$space.3" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>Köpek Pi</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>

          <Card mt="$space.3" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>Honda S2000</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>

          <Card mt="$space.3" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>Kuaför Fiyat Listesi</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>

          <Card mt="$space.3" h={64} backgroundColor="$inputBackground">
            <XStackFullW ai="center" jc="space-between">
              <UserIcon size={24} color={'black'} />
              <Paragraph>İnşaat Daire Fiyatları</Paragraph>
              <Switch borderColor={'transparent'} checked={true} backgroundColor={'orange'}>
                <Switch.Thumb borderWidth="$3" size={'$size.10'} borderColor={'$white'} />
              </Switch>
            </XStackFullW>
          </Card>
        </YStackFullW>
      </ScreenContainer>
    </YStack>
  )
}
