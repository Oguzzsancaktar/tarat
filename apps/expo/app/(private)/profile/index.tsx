import { getAppIcon, GoogleIcon } from '@packages/common/components'
import { APP_COLORS } from '@packages/common/constants'
import { ProfileScreen } from '@packages/common/views'
import { Text, View } from '@tamagui/core'
import { Tabs } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarButton(props) {
            return getAppIcon({ icon: 'cake', size: 25, color: APP_COLORS.gray })
          },
        }}
      />
      <ProfileScreen />
    </>
  )
}
