import { RegisterScreen } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Register',
        }}
      />
      <RegisterScreen />
    </>
  )
}
