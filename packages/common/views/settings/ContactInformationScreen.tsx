import React, { useState } from 'react'
import { Label, ListItem } from '@packages/ui'
import { useLink } from 'solito/link'
import { ScreenContainer } from '../../components'
import { Card, YStackFullW } from '@packages/ui/src/components'
import { Phone } from '@tamagui/lucide-icons'
import { Switch } from '@packages/ui/src/components/switch'
import { ScrollView } from 'react-native'

export default function ContactInformationScreen() {
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

  const [passwordResetType, setPasswordResetType] = React.useState<string>()

  const handleRatioClick = (value: string) => {
    setPasswordResetType(value)
  }

  return (
    <ScrollView>
      <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
        <YStackFullW ai={'center'} style={{ height: '100%' }}>
          <Card backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={215} minWidth={90}>
                Telefon
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb backgroundColor={'white'} animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={215} minWidth={90}>
                E-Posta
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={215} minWidth={90}>
                Adres
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={200} minWidth={90}>
                Instagram
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={200} minWidth={90}>
                Facebook
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={200} minWidth={90}>
                Twitter(X)
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={215} minWidth={90}>
                LinkedIn{' '}
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb animation="quick" />
              </Switch>
            </ListItem>
          </Card>
          <Card mt={'$space.3'} backgroundColor="$inputBackground">
            <ListItem backgroundColor={'$inputBackground'} mb={10} icon={Phone} mt={'$3'}>
              <Label backgroundColor={'$inputBackground'} pr={215} minWidth={90}>
                GitHub{' '}
              </Label>
              <Switch backgroundColor="$orange">
                <Switch.Thumb borderColor={'gray'} animation="quick" />
              </Switch>
            </ListItem>
          </Card>
        </YStackFullW>
      </ScreenContainer>
    </ScrollView>
  )
}
