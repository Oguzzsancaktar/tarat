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
      <Tabs.Screen
        name="qrPage"
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
              <QrCode color={color} size={24} style={{ marginBottom: 12 }} />
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
