import React, { useMemo } from 'react'
import { Input, XStackFullW } from '@packages/ui/src/components'
import { Image, Stack, useTheme } from '@packages/ui'

import AppleIcon from '../icons/AppleIcon'

interface IProps {
  placeholder: string
  error: boolean
  success: boolean
  icon: 'mail'
  value: string
}
const InputWithIcon: React.FC<IProps> = ({ placeholder, error, success, icon, value }) => {
  const highlightColor = useMemo(() => {
    if (error) {
      return '$red'
    }
    if (success) {
      return '$primary'
    }
    return '$inputColor'
  }, [error, success])

  return (
    <XStackFullW
      // @todo: tamabug
      borderRadius={'$radius.15' as any}
      overflow={'hidden'}
      alignItems="center"
      height={'$10'}
      backgroundColor={'$inputBackground'}
      borderColor={highlightColor}
      borderWidth={'$px1'}
    >
      <Stack
        w={'$10'}
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%', color: '$red' }}
      >
        <AppleIcon color={'white'} size={20} />
      </Stack>
      <Input color={highlightColor} value={value} placeholder={placeholder} />
    </XStackFullW>
  )
}

export default InputWithIcon
