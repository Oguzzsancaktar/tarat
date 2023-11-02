import React from 'react'
import { Stack } from '@packages/ui'

interface IProps {
  children: React.ReactNode
}
const ScreenContainer = ({ children }) => {
  return <Stack paddingVertical="$20">{children}</Stack>
}

export default ScreenContainer
