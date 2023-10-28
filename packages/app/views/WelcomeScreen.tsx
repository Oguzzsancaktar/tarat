import React from 'react'
import { Image, Paragraph, Text, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> 1e5c7f84ee56ee5279fa6030ba4403de9d6d513e
import { useLink } from 'solito/link'

export default function WelcomeScreen() {
  const loginLinkProps = useLink({
    href: '/login',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        {/* <Image
          // src={LogoImage}
          alt="Logo"
          source={{
            uri: 'https://placekitten.com/200/300',
            width: 200,
            height: 300,
          }}
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
