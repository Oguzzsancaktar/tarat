import { getAppIcon } from '@packages/common/components'
import { APP_COLORS } from '@packages/common/constants'
import { QrPageListScreen, SettingsScreen } from '@packages/common/views'
import { Tabs } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'List',

          tabBarButton(props) {
            return getAppIcon({ icon: 'location', size: 25, color: APP_COLORS.gray })
          },
        }}
      />
      <QrPageListScreen />
    </>
  )
}
