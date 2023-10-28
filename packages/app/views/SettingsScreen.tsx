import React, { useState } from 'react'
import { Avatar, Label, Paragraph, XStack, YStack } from '@my/ui'
import { Button, Card } from '@my/ui/src/components'
import { Bell, Instagram, Facebook, X, Sun } from '@tamagui/lucide-icons'
import { Switch } from '@my/ui/src/components/switch'
import { useLink } from 'solito/link'
import { Appearance } from 'react-native'
import { useColorScheme } from 'react-native'

export default function SettingScreen() {
  const schema = useColorScheme()

  const settigsScreenProps = useLink({
    href: '/settings',
  })

  const [isChecked, setIsChecked] = useState({
    isCheckedNotify: true,
    isCheckedInstagram: true,
    isCheckedFacebook: true,
    isCheckedX: true,
    isCheckedAppIcon: true,
    isCheckedDarkTheme: schema === 'dark',
  })

  const handleSwitchPress = (key) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  const handleDarkThemeToggle = () => {
    handleSwitchPress('isCheckedDarkTheme')
    const newTheme = schema === 'light' ? 'dark' : 'light'
    Appearance.setColorScheme(newTheme)
  }

  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <YStack jc={'center'} mt={'$10'} ai={'center'}>
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/395152042_294483536741899_7688305704647683554_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ucH20L2uveMAX_2BZzj&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD8y-stGyjZXMsVJZxJL5orcJBNJx5Lzc8FCH_fnI4CZQ&oe=653FFC05&_nc_sid=8b3546"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Paragraph>gokhandogulu@gmail.com</Paragraph>
          <Button mt={'$2'} height={30} background={'blue'} width={130}>
            Profili Düzenle
          </Button>
        </YStack>

        <YStack>
          <Paragraph>Genel</Paragraph>
          <Card>
            <XStack jc={'space-between'}>
              <XStack ai={'center'}>
                <Bell />
                <Label ml={'$2'} htmlFor="notify">
                  Kullanıcı Bildirimleri
                </Label>
              </XStack>
              <Switch
                checked={isChecked.isCheckedNotify}
                onCheckedChange={() => handleSwitchPress('isCheckedNotify')}
                name="notifySwitch"
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
          </Card>
        </YStack>

        <YStack mt={'$8'}>
          <Paragraph>Gizlilik & Güvenlik</Paragraph>
          <Card>
            <XStack jc={'space-between'}>
              <XStack ai={'center'}>
                <Instagram />
                <Label ml={'$2'} htmlFor="instagramSwitch">
                  Instagram Hesabımı Göster
                </Label>
              </XStack>
              <Switch
                checked={isChecked.isCheckedInstagram}
                onCheckedChange={() => handleSwitchPress('isCheckedInstagram')}
                name="instagramSwitch"
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>

            <XStack mt={'$3'} jc={'space-between'}>
              <XStack ai={'center'}>
                <Facebook />
                <Label ml={'$2'} htmlFor="facebookSwitch">
                  Facebook Hesabımı Göster
                </Label>
              </XStack>
              <Switch
                checked={isChecked.isCheckedFacebook}
                onCheckedChange={() => handleSwitchPress('isCheckedFacebook')}
                name="facebookSwitch"
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>

            <XStack mt={'$3'} jc={'space-between'}>
              <XStack ai={'center'}>
                <X />
                <Label ml={'$2'} htmlFor="xSwitch">
                  X Hesabımı Göster
                </Label>
              </XStack>
              <Switch
                checked={isChecked.isCheckedX}
                onCheckedChange={() => handleSwitchPress('isCheckedX')}
                name="xSwitch"
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
          </Card>
        </YStack>

        <YStack mt={'$8'}>
          <Paragraph>Uygulama Ayarları</Paragraph>
          <Card mt={'$2'}>
            <XStack jc={'space-between'}>
              <XStack ai={'center'}>
                <Sun />
                <Label ml={'$2'} htmlFor="darkTheme">
                  Koyu Görünüş
                </Label>
              </XStack>
              <Switch
                checked={isChecked.isCheckedDarkTheme}
                onCheckedChange={() => handleDarkThemeToggle()}
                name="darkThemeSwitch"
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
          </Card>
        </YStack>
      </YStack>
    </YStack>
  )
}
