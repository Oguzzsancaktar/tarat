import { QrPageListScreen } from 'app/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'QrPage',
        }}
      />
      <QrPageListScreen />
    </>
  )
}
