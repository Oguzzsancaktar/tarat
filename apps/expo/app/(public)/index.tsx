import {
  ProfileScreen,
  ProfileWizard1,
  ProfileWizard2,
  ProfileWizard3,
  QrList,
  QrListEdit,
  ResetPasswordScreen,
  VerifyMailScreen,
  VerifyPhoneScreen,
  WelcomeScreen,
} from '@packages/common/views'

import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <QrListEdit />
    </>
  )
}
