import React from 'react'
import { Image, Paragraph, Stack, View, H3, YStack } from '@packages/ui'
import { useAppImages } from '@packages/common/hooks'
import { useLink } from 'solito/link'
import { Button, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '../components/containers'

export default function WelcomeScreen() {
  const appImages = useAppImages()

  const registerLimkProps = useLink({
    href: '/register',
  })

  const loginLinkProps = useLink({
    href: '/login',
  })

  return (
    <ScreenContainer verticalPadding={false}>
      <YStack style={{ height: '100%', width: '100%' }} jc="space-between" ai="center">
        {/*Images */}
        <View mt="$space.7" style={{ width: '100%' }} jc={'center'} ai={'center'}>
          <Image overflow="visible" width={'100%'} source={appImages.welcomeThumbnail} />
        </View>

        {/*LOGO*/}
        {/*Slogan */}
        <YStack jc={'center'} ai={'center'}>
          <H3>TARAT</H3>
          <Paragraph color={'$textGray'} fontFamily="$body" textAlign="center">
            Hadi sen de TARAT ile ürünlerin
            {'\n'}
            hakkında bilgi ver.
          </Paragraph>
        </YStack>

        {/*Button */}
        <YStackFullW paddingHorizontal="$space.5" jc={'center'} ai={'center'}>
          <Button {...loginLinkProps}>Giriş Yap</Button>
          <Button mt={'$space.2'} {...registerLimkProps} background="orange30">
            Kayıt Ol
          </Button>
        </YStackFullW>
      </YStack>
    </ScreenContainer>
  )
}
