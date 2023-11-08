import { getAppIcon, GoogleIcon } from '@packages/common/components'
import { APP_COLORS } from '@packages/common/constants'
import { SettingsScreen } from '@packages/common/views'
import { Tabs } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarButton(props) {
            return getAppIcon({ icon: 'arrow-right', size: 25, color: APP_COLORS.gray })
          },
        }}
      />
      <SettingsScreen />
    </>
  )
}
