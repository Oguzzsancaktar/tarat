import React, { useEffect } from 'react'
import { Image, Paragraph, Stack, YStack, Button, View } from '@packages/ui'
import { useAppImages, useSession } from '@packages/common/hooks'
import { LoginButton, RegisterButton } from '@packages/common/components'
import { useLink } from 'solito/link'

export default function WelcomeScreen() {
  const appImages = useAppImages()
  const { session, isLoading, signIn, signOut } = useSession()

  const settingsLinkProps = useLink({
    href: '/settings',
  })

  console.log('appImages.companyLogo22', appImages.companyLogo)
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
      <View>
        <Image
          position="absolute"
          right={'$-20'}
          transform="rotate(-45deg)"
          bottom={'$0'}
          source={appImages.bubble}
          resizeMode="contain"
        />
      </View>
      <View>
        <Image mb={'$-8'} source={appImages.thumbnail} />
      </View>

      <YStack alignItems="center">
        <Paragraph mb="$4" maw={'$20'} ta="center">
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna.
        </Paragraph>

        <View mb="$4">
          <Button onPress={() => signIn()}>signin</Button>
        </View>

        <View mb="$4">
          <Button {...settingsLinkProps}>serttin</Button>
        </View>

        <Stack mb="$4">
          <LoginButton />
        </Stack>

        <RegisterButton />
      </YStack>
    </YStack>
  )
}
