import { MailRegisterScreen } from 'app/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Register Mail',
        }}
      />
      <MailRegisterScreen />
    </>
  )
}
