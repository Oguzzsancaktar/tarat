import React, { useMemo } from 'react'
import { Image, Paragraph, Text, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
import { useLink } from 'solito/link'
import { useAppImages } from 'app/hooks'

export default function WelcomeScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })

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
        <Image alt="Logo" source={appImages.companyLogo} resizeMode="contain" />
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
        <Button {...registerLinkProps} mb="$2.5" size="large" background="red">
          Kayıt Ol
        </Button>
        <Button {...loginLinkProps} size="large" background="gray">
          Zaten hesabın var mı?
        </Button>
      </YStack>
    </YStack>
  )
}
