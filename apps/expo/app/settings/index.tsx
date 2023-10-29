import { SettingsScreen } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Settings',
        }}
      />
      <SettingsScreen />
    </>
  )
}
