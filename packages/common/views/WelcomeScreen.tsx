import React from 'react'
import { Image, Paragraph, Stack, YStack } from '@packages/ui'
import { useAppImages } from '@packages/common/hooks'
import { LoginButton, RegisterButton } from '@packages/common/components'

export default function WelcomeScreen() {
  const appImages = useAppImages()

  return (
    <YStack
      maw={400}
      backgroundColor={'$background'}
      f={1}
      alignSelf="center"
      jc="space-between"
      ai="center"
      py="$10"
      px="$4"
    >
      <YStack maw={600}>
        {process?.title !== 'browser' && (
          <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />
        )}
      </YStack>
      <Image
        position="absolute"
        //@todo: add bigger points
        left={'$-20'}
        transform="rotate(-45deg)"
        top={'$5'}
        source={appImages.bubble}
        resizeMode="contain"
      />
      <Image
        position="absolute"
        right={'$-20'}
        transform="rotate(-45deg)"
        bottom={'$0'}
        source={appImages.bubble}
        resizeMode="contain"
      />

      <Image mb={'$-8'} source={appImages.thumbnail} resizeMode="contain" />

      <YStack alignItems="center">
        <Paragraph mb="$4" maw={'$20'} ta="center">
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna.
        </Paragraph>

        <Stack mb="$4">
          <LoginButton />
        </Stack>

        <RegisterButton />
      </YStack>
    </YStack>
  )
}
