import React from 'react'
import { Button } from '@packages/ui/src/components'
import { Avatar, Text, YStack } from 'tamagui'
import { MailCheck } from '@tamagui/lucide-icons'
const RatioButton = ({ Title, Description }) => {
  return (
    <Button background={'$ratioButton'} type={'ratio'}>
      <Avatar borderRadius={'$size.10'} size={'$10'} backgroundColor="#F8B40120" />
      <YStack>
        <Text fontSize={18} color={'$textGray'}>
          {Title}
        </Text>
        <Text fontSize={14} color={'$textGray'}>
          {Description}
        </Text>
      </YStack>
    </Button>
  )
}
export default RatioButton
