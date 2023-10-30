import React, { useState } from 'react'
import { Image, Label, Paragraph, Progress, YStack } from '@packages/ui'
import { Button, Input } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ArrowLeftCircle } from '@tamagui/lucide-icons'

export default function MailRegisterScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleSubmit = () => {
    if (userData.email === '' || userData.password === '' || userData.passwordConfirm === '') {
      alert('Şifreler uyuşmuyor veya eksik!')
    } else if (userData.email !== 'doğru_email' || userData.password !== 'doğru_şifre') {
      alert('Geçersiz e-posta ya da şifre girdiniz!')
    } else {
      alert('Kayıt Başarılı!')
    }

    console.log('EMAIL', userData.email)
    console.log('PASSWORD', userData.password)
    console.log('PASSWORD_CONFIRM', userData.passwordConfirm)
  }

  return (
    <YStack
      backgroundColor="$background"
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      paddingTop="$10"
      paddingHorizontal="$4"
    >
      <YStack width={Dimensions.get('window').width} alignItems="center">
        <YStack position="absolute" top="$-2" left="$5">
          <ArrowLeftCircle {...registerLinkProps} size="$3" color="$gray11" />
        </YStack>

        <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />
      </YStack>

      <YStack>
        <YStack>
          <Label htmlFor="emailReg" size="$1" color="$gray8" marginBottom="$1.5">
            E-posta adresi
          </Label>
          <Input
            id="email"
            textContentType="emailAddress"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.nativeEvent.text })}
            background="gray"
            marginBottom="$4"
          />
        </YStack>
        <YStack>
          <Label htmlFor="passwordReg" size="$1" color="$gray8" marginBottom="$1.5">
            Şifre
          </Label>
          <Input
            id="password"
            textContentType="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.nativeEvent.text })}
            background="gray"
            marginBottom="$4"
          />
        </YStack>
        <YStack>
          <Label htmlFor="re-passwordReg" size="$1" color="$gray8" marginBottom="$1.5">
            Şifre Tekrar
          </Label>
          <Input
            id="passwordConfirm"
            textContentType="password"
            value={userData.passwordConfirm}
            onChange={(e) => setUserData({ ...userData, passwordConfirm: e.nativeEvent.text })}
            background="gray"
          />
        </YStack>
        <YStack alignItems="center">
          <Progress marginTop="$5" width="$20" size="$1" backgroundColor="$gray8" value={25}>
            <Progress.Indicator backgroundColor="$green9" animation="bouncy" />
          </Progress>
          <Paragraph size="$1" color="$gray8">
            Şifre uzunluğu 8 karakterden az olamaz!
          </Paragraph>
        </YStack>
      </YStack>

      <YStack justifyContent="center" alignItems="center">
        <Button size="large" background="red" onPress={handleSubmit}>
          Kayıt ol
        </Button>
      </YStack>
    </YStack>
  )
}
