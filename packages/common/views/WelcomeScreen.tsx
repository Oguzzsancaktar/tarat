import React from 'react'
// Hooks
import { useAppImages, useAppRoutes } from '@packages/common/hooks'
// Lib Components
import { Image, Paragraph, View, H3, YStack } from '@packages/ui'
// UI Components
import { YStackFullW } from '@packages/ui/src/components'
// Common Components
import { LoginButton, RegisterButton, ScreenContainer } from '../components'

export default function WelcomeScreen() {
  const appImages = useAppImages()
  const { settingsLinkProps } = useAppRoutes()

  return (
    <ScreenContainer horizontalPadding={false} verticalPadding={false}>
      <YStack
        pb={'$space.10'}
        style={{ height: '100%', width: '100%' }}
        jc="space-between"
        ai="center"
      >
        {/*Images */}
        <View style={{ width: '100%' }} jc={'center'} ai={'center'}>
          <Image overflow="visible" width={'100%'} source={appImages.welcomeThumbnail} />
        </View>

        {/*LOGO*/}
        {/*Slogan */}
        <YStack jc={'center'} ai={'center'}>
          <H3 {...settingsLinkProps}>TARAT</H3>
          <Paragraph color={'$textGray'} fontFamily="$body" textAlign="center">
            Hadi sen de TARAT ile ürünlerin
            {'\n'}
            hakkında bilgi ver.
          </Paragraph>
        </YStack>

        {/*Button */}
        <YStackFullW paddingVertical="$space.3" paddingHorizontal="$space.5">
          <YStackFullW mb={'$space.3'}>
            <LoginButton />
          </YStackFullW>
          <RegisterButton />
        </YStackFullW>
      </YStack>
    </ScreenContainer>
  )
}
