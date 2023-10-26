import { Home, LogIn, FileKey, Mail, KeyRound } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="welcome"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <Home color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <KeyRound color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mailRegister"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <FileKey color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <LogIn color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mailLogin"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: '#1c1c23',
              }}
            >
              <Mail color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>Home</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
