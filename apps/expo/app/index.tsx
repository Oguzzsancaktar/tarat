import { WelcomeScreen } from '@packages/common/views'
import EditProfileScreen from '@packages/common/views/EditProfileScreen'
import SettingScreen from '@packages/common/views/settings/SettingsScreen'
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
      <SettingScreen />
    </>
  )
}
