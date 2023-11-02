import React from 'react'
import { H1, Input, Button, YStack } from '@packages/ui'
import { Dimensions } from 'react-native'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { useNavigation } from '@react-navigation/native'
import { useLink } from 'solito/link'

export default function MailRegisterScreen() {
  const navigation = useNavigation()

  const successLinkProps = useLink({
    href: '/login/passwordSuccess',
  })

  const welcomeLinkProps = useLink({
    href: '/',
  })
  return (
    <YStack backgroundColor={'$background'} f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack w={Dimensions.get('window').width} ai="center">
        <YStack position="absolute" top={'$-2'} left={'$5'}>
          <Button
            icon={<ArrowLeft />}
            {...welcomeLinkProps}
            w={50}
            h={50}
            mt={'$3'}
            ml={'$3'}
            backgroundColor="#F8B40120"
            color={'#F8B401'}
          />
        </YStack>
      </YStack>

      <YStack>
        <YStack>
          <YStack>
            <H1 mt={80} mb={30}>
              Şifrenizi {'             '} Sıfırlayın
            </H1>
          </YStack>
          <Input placeholder="Şifre" w={358} h={66} backgroundColor={'$gray4'} mb={'$4'} />
        </YStack>

        <YStack>
          <Input
            placeholder="Şifreyi doğrula"
            w={358}
            h={66}
            backgroundColor={'$gray4'}
            mb={'$1'}
          />
          <Button {...successLinkProps} mt={'$5'} h={66} w={358} mb={300} backgroundColor="#F8B401">
            Sıfırla
          </Button>
        </YStack>
      </YStack>
    </YStack>
  )
}
