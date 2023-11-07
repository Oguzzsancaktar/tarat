import { QrPageListScreen, SettingsScreen } from '@packages/common/views'
import { Tabs } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Tabs.Screen
        options={{
          href: null,
          headerShown: false,
          title: 'List',
        }}
      />
      <QrPageListScreen />
    </>
  )
}
