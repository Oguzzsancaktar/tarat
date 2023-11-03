import React from 'react'
import { Stack } from '@packages/ui'
import { ButtonGoBack } from '../buttons'

interface IProps {
  children: React.ReactNode
  showGoBackButton?: boolean
}
const ScreenContainer: React.FC<IProps> = ({ children, showGoBackButton = false }) => {
  return (
    <Stack paddingVertical="$20">
      {showGoBackButton && <ButtonGoBack />}
      {children}
    </Stack>
  )
}

export default ScreenContainer
