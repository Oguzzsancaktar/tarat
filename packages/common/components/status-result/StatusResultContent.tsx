import { Check } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import { Avatar, H4, Paragraph, YStack } from 'tamagui'

interface IProps {
  status: 'success' | 'error'
  title: string
  message: string
}
const StatusResultContent: React.FC<IProps> = ({ status, title, message }) => {
  const color = useMemo(() => {
    return status === 'success' ? '$orange' : '$red'
  }, [status])
  return (
    <YStack jc={'center'} ai={'center'}>
      <Avatar
        h={115}
        w={115}
        mb="$space.2"
        borderRadius={100}
        size={150}
        backgroundColor={color + 30}
      >
        <Check color={color} size={70} />
      </Avatar>
      <H4 color={'$heading'}>{title}</H4>
      <Paragraph mb={'$space.3'} color={'gray'} size={'$1'}>
        {message}
      </Paragraph>
    </YStack>
  )
}

export default StatusResultContent
