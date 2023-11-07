import React from 'react'
import { H3, Stack } from '@packages/ui'
import { ButtonGoBack } from '../buttons'
import { useWindowDimensions } from 'react-native'
import { XStackFullW } from '@packages/ui/src/components'

interface IProps {
  children: React.ReactNode
  title?: string
  showGoBackButton?: boolean
  verticalPadding?: boolean
  horizontalPadding?: boolean
}
const ScreenContainer: React.FC<IProps> = ({
  children,
  title,
  showGoBackButton = false,
  verticalPadding = true,
  horizontalPadding = true,
}) => {
  const { width, height } = useWindowDimensions()
  return (
    <Stack
      height={height}
      width={width}
      position="relative"
      backgroundColor={'$background'}
      paddingVertical={'$7'}
      paddingTop={verticalPadding ? '$25' : '$7'}
      paddingHorizontal={horizontalPadding ? '$space.5' : '$0'}
    >
      {showGoBackButton && (
        // @tamabug: tamagui type bug
        <Stack zIndex={'$9' as any} position="absolute" top="$space.5" left="$space.5">
          <ButtonGoBack />
        </Stack>
      )}

      {title && (
        <XStackFullW
          justifyContent="center"
          ai="center"
          position="absolute"
          top="$space.5"
          left="$space.5"
          height={'$10'}
        >
          <H3 style={{ width: '100%' }} textAlign="center">
            {title}
          </H3>
        </XStackFullW>
      )}

      {children}
    </Stack>
  )
}

export default ScreenContainer
