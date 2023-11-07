import React from 'react'
import { Stack, View } from '@packages/ui'
import { ButtonGoBack } from '../buttons'
import { Dimensions, useWindowDimensions } from 'react-native'

interface IProps {
  children: React.ReactNode
  showGoBackButton?: boolean
  verticalPadding?: boolean
  horizontalPadding?: boolean
}
const ScreenContainer: React.FC<IProps> = ({
  children,
  showGoBackButton = false,
  verticalPadding = true,
  horizontalPadding = true,
}) => {
  const { width, height } = useWindowDimensions()
  return (
    <Stack
      position="relative"
      backgroundColor={'$background'}
      height={height}
      paddingVertical={'$7'}
      paddingTop={verticalPadding ? '$30' : '$7'}
      paddingHorizontal={horizontalPadding ? '$7' : '$0'}
    >
      {showGoBackButton && (
        // @tamabug: tamagui type bug
        <Stack zIndex={'$9' as any} position="absolute" top="$space.10" left="$space.5">
          <ButtonGoBack />
        </Stack>
      )}
      {children}
    </Stack>
  )
}

export default ScreenContainer
