import React, { useState } from 'react'
import { Avatar, Label, LabelFrame, ListItem, Paragraph, XStack, YStack } from '@my/ui'
import { useLink } from 'solito/link'
import { Button, Card, Input } from '@my/ui/src/components'

export default function EditProfile() {
  const editProfileScreenProps = useLink({
    href: '/editProfile/',
  })

  const [isChecked, setIsChecked] = useState({
    isCheckedNotify: true,
    isCheckedInstagram: true,
    isCheckedFacebook: true,
    isCheckedX: true,
    isCheckedAppIcon: true,
    isCheckedDarkTheme: true,
  })

  const handleSwitchPress = (key) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <YStack jc={'center'}>
          <XStack jc={'space-between'} px={'$1'} ai={'center'}>
            <Avatar circular size="$10">
              {/* <Avatar.Image
                accessibilityLabel="Cam"
                src="https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/395152042_294483536741899_7688305704647683554_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ucH20L2uveMAX_2BZzj&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD8y-stGyjZXMsVJZxJL5orcJBNJx5Lzc8FCH_fnI4CZQ&oe=653FFC05&_nc_sid=8b3546"
              /> */}
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>

            <Button size={'medium'}>Kaydet</Button>
          </XStack>
        </YStack>

        <YStack jc={'space-between'} mt={'$8'}>
          <Paragraph color={'$blue10'} mb={'$2'} ta={'left'}>
            Kişisel Bilgiler
          </Paragraph>
          <Card>
            <XStack jc={'space-between'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="name">
                İsim
              </Label>
              <Input background={'blue'} width={300} id="name" defaultValue="Gökhan Doğulu" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="phone">
                Telefon
              </Label>
              <Input
                background={'blue'}
                width={300}
                id="phone"
                defaultValue="+90-(533)-333-33-33"
              />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="e-mail">
                E-Posta
              </Label>
              <Input
                background={'blue'}
                width={300}
                id="e-mail"
                defaultValue="gokhandogulu@gmail.com"
              />
            </XStack>
          </Card>
        </YStack>

        <YStack jc={'space-between'} mt={'$8'}>
          <Paragraph color={'$blue10'} mb={'$2'} ta={'left'}>
            Adres Bilgileri
          </Paragraph>
          <Card>
            <XStack jc={'space-between'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="title">
                Başlık
              </Label>
              <Input background={'blue'} width={300} id="il" defaultValue="İş" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="il">
                İl
              </Label>
              <Input background={'blue'} width={300} id="il" defaultValue="İstanbul" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="ilçe">
                İlçe
              </Label>
              <Input background={'blue'} width={300} id="ilçe" defaultValue="Avcılar" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="adres">
                Adres
              </Label>
              <Input
                background={'blue'}
                width={300}
                id="e-mail"
                defaultValue="Güzel Evler Sit. NO:15/A"
              />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="adres">
                Tarif
              </Label>
              <Input
                background={'blue'}
                width={300}
                id="e-mail"
                defaultValue="Siteden içeri girince 3. sola dönün..."
              />
            </XStack>
          </Card>
        </YStack>

        <YStack jc={'space-between'} mt={'$8'}>
          <Paragraph color={'$blue10'} mb={'$2'} ta={'left'}>
            Adres Bilgileri
          </Paragraph>
          <Card>
            <XStack jc={'space-between'} ai="center">
              <Label color={'$blue10'} width={60} htmlFor="title">
                Marka
              </Label>
              <Input background={'blue'} width={300} id="il" defaultValue="İş" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="il">
                Model
              </Label>
              <Input background={'blue'} width={300} id="il" defaultValue="İstanbul" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="ilçe">
                İlçe
              </Label>
              <Input background={'blue'} width={300} id="ilçe" defaultValue="Avcılar" />
            </XStack>

            <XStack jc={'space-between'} mt={'$3'} alignItems="center">
              <Label color={'$blue10'} width={60} htmlFor="adres">
                Tarif
              </Label>
              <Input
                background={'blue'}
                width={300}
                id="e-mail"
                defaultValue="Siteden içeri girince 3. sola dönün..."
              />
            </XStack>
          </Card>
        </YStack>
      </YStack>
    </YStack>
  )
}
