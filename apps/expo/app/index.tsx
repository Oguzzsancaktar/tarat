import { WelcomeScreen } from 'app/views'
import { Redirect, Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <WelcomeScreen />
      <Redirect href="/welcome" />
    </>
  )
}
