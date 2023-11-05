import React from 'react'

import { RegisterWizard } from '@packages/common/components'
import { RegisterContextProvider } from '@packages/common/context/registerContext'

export default function RegisterScreen() {
  return (
    <RegisterContextProvider>
      <RegisterWizard />
    </RegisterContextProvider>
  )
}
