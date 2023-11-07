import { ProfileScreen } from '@packages/common/views'
import { Tabs } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Tabs.Screen
        options={{
          tabBarShowLabel: true,
          headerShown: true,
          title: 'Profile',
        }}
      />
      <ProfileScreen />
    </>
  )
}
