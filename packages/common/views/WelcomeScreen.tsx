import React from 'react'
import { Image, Paragraph, Stack, View, H3 } from '@packages/ui'
import { useAppImages } from '@packages/common/hooks'
import { useLink } from 'solito/link'
import { Button } from '@packages/ui/src/components'
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
    <ScreenContainer>
      <Stack maw={400} alignSelf="center" jc="space-between" ai="center" py="$10" px="$4">
        <Stack maw={600}>
          {/*Images */}
          <View jc={'center'} ai={'center'}>
            <Image mt={100} w={300} source={appImages.thumbnail} />
          </View>
          {/*LOGO*/}
          <Stack jc={'center'} ai={'center'}>
            <H3>TARAT</H3>
          </Stack>
          {/*Slogan */}
          <Stack jc={'center'} ai={'center'}>
            <Paragraph>Sen de TARAT ile nesnelerin hakkında bilgi ver.</Paragraph>
          </Stack>
          {/*Button */}
          <Stack jc={'center'} ai={'center'}>
            <Button background="orange" {...loginLinkProps} size="large">
              Giriş Yap
            </Button>
            <Button {...registerLimkProps} size="large" background="white">
              Kayıt Ol a
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </ScreenContainer>
  )
}
