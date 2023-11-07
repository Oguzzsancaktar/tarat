import React from 'react'
import { ProfileMain } from '@packages/common/views'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Profile Main',
        }}
      />
      <ProfileMain />
    </>
  )
}
