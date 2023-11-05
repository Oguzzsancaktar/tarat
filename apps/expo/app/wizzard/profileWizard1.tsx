import React from 'react'
import { ProfileWizard1 } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Wizard1',
        }}
      />
      <ProfileWizard1 />
    </>
  )
}
