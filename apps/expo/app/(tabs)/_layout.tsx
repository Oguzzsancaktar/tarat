import { Home, LogIn, FileKey, Mail, KeyRound } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: '#1c1c23',
        tabBarActiveTintColor: '#FF7966',
      }}
    >
      <Tabs.Screen
        name="welcome"
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
                backgroundColor: 'transparent',
              }}
            >
              <Home color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="register"
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
                backgroundColor: 'transparent',
              }}
            >
              <KeyRound color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mailRegister"
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
                backgroundColor: 'transparent',
              }}
            >
              <FileKey color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="login"
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
                backgroundColor: 'transparent',
              }}
            >
              <LogIn color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mailLogin"
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
              <Mail color={color} size={24} style={{ marginBottom: 12 }} />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
