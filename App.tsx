import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screen/LoginScreen'
const Stack = createNativeStackNavigator()

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

export const theme = extendTheme({ config })

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
