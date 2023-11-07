import React, { useState } from 'react'
import { Avatar, Label, XStack, YStack, ScrollView, Button, Card, Paragraph } from '@packages/ui'
import { useLink } from 'solito/link'
import { InputWithIcon, RatioButton, ScreenContainer } from '../components'
import { YStackFullW } from '@packages/ui/src/components'

export default function EditProfileScreen() {
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
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW>
        <Paragraph>dlkfk</Paragraph>
      </YStackFullW>
    </ScreenContainer>
  )
}
