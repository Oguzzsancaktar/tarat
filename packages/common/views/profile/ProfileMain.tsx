import React from 'react'
import { Avatar, H1, Image, Paragraph, View } from '@packages/ui'
import { useAppImages } from '@packages/common/hooks'
import { Button, Card, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'
import { LinearGradient } from '@tamagui/linear-gradient'

export default function ProfileMain() {
  const appImages = useAppImages()

  return (
    <ScreenContainer horizontalPadding={false} showGoBackButton={true}>
      <YStackFullW
        style={{
          height: '100%',
          backgroundImage: `url(${appImages.profileLinear})`,
          backgroundSize: 'cover',
        }}
        jc={'space-between'}
      >
        <YStackFullW ai={'center'}>
          {/* HEADER */}
          {/* AVATAR */}

          <YStackFullW ai={'center'}>
            <Avatar zIndex={'$1'} circular size={'$25'}>
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/395152042_294483536741899_7688305704647683554_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=107&_nc_ohc=e0LLismN2WsAX9azS_R&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCiifxbrs_6-rabveKhCVmk94TUOX7HqG_tGF98x0eZ0Q&oe=654DD3C5&_nc_sid=8b3546"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <LinearGradient
              position="absolute"
              style={{ width: '100%' }}
              bottom={0}
              width={428}
              height={252}
              flex-shrink={0}
              colors={['$white', '$orange30']}
              start={[0, 1]}
              end={[0, 0]}
            />
          </YStackFullW>
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

        <YStackFullW ai="center" px={'$space.4'}>
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

        <XStackFullW px={'$space.5'} ai={'center'} jc={'space-between'}>
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
