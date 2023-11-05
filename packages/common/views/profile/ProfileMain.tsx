import React from 'react'
import { Avatar, H1, Paragraph, View, XStack, YStack } from '@packages/ui'
import { SettingsIcon } from '@packages/common/components/icons'
import { ScreenContainer } from '@packages/common/components'
import { Button, Card, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import TabsLayout from '../../../../apps/expo/app/(tabs)/_layout'

export default function ProfileMain() {
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW ai={'center'}>
          {/* HEADER */}
          {/* AVATAR */}
          <Avatar circular size={'$25'}>
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          {/* NAME */}
          <H1 ta={'center'} color={'$heading'}>
            Gökhan Doğulu
          </H1>
          {/* E-MAIL */}
          <Paragraph ta={'center'} color={'$textGray'}>
            gokhandogulu@gmail.com
          </Paragraph>
          <Button w={'$25'} h={'$7'}>
            Profili Düzenle
          </Button>
        </YStackFullW>

        <YStackFullW ai="center">
          <Card style={{ width: '100%' }} backgroundColor={'$cardBackground'} py={'$10'}>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Ad Soyad</Paragraph>
              <Paragraph>Mercedes</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Doğum Tarihi</Paragraph>
              <Paragraph>13.02.1999</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Adres</Paragraph>
              <Paragraph>Ataşehir/İstanbul</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Posta Kodu</Paragraph>
              <Paragraph>34184</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Telefon</Paragraph>
              <Paragraph>+90(555)-555-55-55</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>Instagram</Paragraph>
              <Paragraph>@gokhandogulu</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>X</Paragraph>
              <Paragraph>@gokhandogulu</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>LinkedIn</Paragraph>
              <Paragraph>@gokhandogulu</Paragraph>
            </XStackFullW>
            <XStackFullW jc={'space-between'} ai={'center'}>
              <Paragraph>GitHub</Paragraph>
              <Paragraph>@gokhandogulu</Paragraph>
            </XStackFullW>
          </Card>
        </YStackFullW>

        <XStackFullW jc={'space-between'}>
          <Paragraph color={'$orange'} ta={'left'}>
            Geri
          </Paragraph>
          <Paragraph color={'$orange'} ta={'center'}>
            Anasayfa
          </Paragraph>
          <Paragraph color={'$orange'} ta={'right'}>
            İleri
          </Paragraph>
        </XStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
