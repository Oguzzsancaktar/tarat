import SettingScreen from 'app/views/SettingsScreen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Edit Profile',
        }}
      />
      <SettingScreen />
    </>
  )
}
