import React from 'react'
import { ProfileWizard3 } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Wizard3',
        }}
      />
      <ProfileWizard3 />
    </>
  )
}
