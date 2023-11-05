import React from 'react'

import { RegisterWizzard } from '@packages/common/components'
import { RegisterContextProvider } from '@packages/common/context/registerContext'

export default function RegisterScreen() {
  return (
    <RegisterContextProvider>
      <RegisterWizzard />
    </RegisterContextProvider>
  )
}
