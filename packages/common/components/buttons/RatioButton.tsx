import React, { useMemo } from 'react'
import { Text, View, YStack } from '@packages/ui'
import { Button } from '@packages/ui/src/components'
import AppleIcon from '../icons/AppleIcon'

interface IProps {
  title: string
  description: string
  isSelected?: boolean
}
const RatioButton: React.FC<IProps> = ({ isSelected = false, title, description }) => {
  return (
    <Button
      alignItems="center"
      justifyContent="flex-start"
      py="$3"
      px="$4"
      style={{ height: 'auto' }}
      background={'ratio'}
      borderColor={isSelected ? '$orange' : ''}
    >
      <Button
        mr={'$space.2'}
        ai={'center'}
        justifyContent="center"
        w="$10"
        background="orange30"
        type="circle"
      >
        <AppleIcon color="orange" size={35} />
      </Button>

      <YStack>
        <Text fontSize={18} color={'$textGray'}>
          {title}
        </Text>
        <Text fontSize={14} color={'$textGray'}>
          {description}
        </Text>
      </YStack>
    </Button>
  )
}
export default RatioButton