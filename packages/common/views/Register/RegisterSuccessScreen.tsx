import React, { useState } from 'react'
import { Button, Paragraph, YStack, H4, Avatar } from '@packages/ui'
import { Dimensions } from 'react-native'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ArrowLeft, Check } from '@tamagui/lucide-icons'

export default function MailRegisterScreen() {
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

      <YStack mb={200} jc={'center'} ai={'center'}>
        <YStack>
          <YStack>
            <YStack jc={'center'} ai={'center'}>
              <Avatar
                ml={15}
                h={115}
                w={115}
                borderRadius={100}
                size={150}
                backgroundColor="#F8B40120"
              >
                <Check color={'#F8B401'} size={70} />
              </Avatar>
              <H4 mt={35}>İşlem Başarılı</H4>
              <Paragraph mb={80} color={'gray'} size={'$1'}>
                Tebrikler, kaydınız başarıyla oluşturuldu.
              </Paragraph>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  )
}
