import React from 'react'
import { ProfileWizzard3 } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Wizzard3',
        }}
      />
      <ProfileWizzard3 />
    </>
  )
}
