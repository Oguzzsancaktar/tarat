import SettingScreen from '@packages/common/views/SettingsScreen'
import { Home, LogIn, FileKey, Mail, KeyRound, QrCode, LayoutList } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF7966',
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabelStyle: {
            marginBottom: 3,
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
              }}
            >
              <SettingScreen />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="qrPageList"
        options={{
          tabBarLabelStyle: {
            marginBottom: 3,
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
              }}
            >
              <LayoutList color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
