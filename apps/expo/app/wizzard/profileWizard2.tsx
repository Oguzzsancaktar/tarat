import React from 'react'
import { ProfileWizard2 } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Wizard2',
        }}
      />
      <ProfileWizard2 />
    </>
  )
}
