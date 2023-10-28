import React from 'react'
import { Image, Paragraph, Text, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
import { useLink } from 'solito/link'

export default function WelcomeScreen() {
  const loginLinkProps = useLink({
    href: '/settings/edit',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        {/* <Image
          width={'$100'}
          height={'$100'}
          // src={LogoImage}
          alt="Logo"
          source={LogoImage}
          resizeMode="contain"
        /> */}
      </YStack>
      {/* <Image
        position="absolute"
        left={'$0'}
        top={'$15'}
        source={require('/assets/welcome-bubble-left.png')}
        resizeMode="contain"
      />
      <Image
        position="absolute"
        right={'$0'}
        bottom={'$11'}
        source={require('/assets/welcome-bubble-right.png')}
        resizeMode="contain"
      /> */}

      {/* <Image mb={'$-8'} source={require('/assets/welcome-tumbnail.png')} resizeMode="contain" /> */}

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
