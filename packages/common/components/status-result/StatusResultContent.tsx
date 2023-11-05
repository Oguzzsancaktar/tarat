import { Check } from '@tamagui/lucide-icons'
import React from 'react'
import { Avatar, H4, Paragraph, YStack } from 'tamagui'

const StatusResultContent = () => {
  return (
    <YStack jc={'center'} ai={'center'}>
      <Avatar ml={15} h={115} w={115} borderRadius={100} size={150} backgroundColor="#F8B40120">
        <Check color={'#F8B401'} size={70} />
      </Avatar>
      <H4 color={'$heading'} mt={35}>
        İşlem Başarılı
      </H4>
      <Paragraph mb={80} color={'gray'} size={'$1'}>
        Tebrikler, kaydınız başarıyla oluşturuldu.
      </Paragraph>
    </YStack>
  )
}

export default StatusResultContent
