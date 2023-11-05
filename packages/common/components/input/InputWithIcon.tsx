import React, { useMemo } from 'react'
import { Input, XStackFullW } from '@packages/ui/src/components'
import { Stack, useTheme } from '@packages/ui'
import { getAppIcon } from '../icons'
import { IIcon } from '../icons/getAppIcon'
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native/types'

interface IProps {
  placeholder: string
  error: boolean
  success: boolean
  icon: IIcon
  value: string
  name: string
  onChange: (value: string, key: string) => void
}
const InputWithIcon: React.FC<IProps> = ({
  placeholder,
  error,
  success,
  icon,
  value,
  name,
  onChange,
}) => {
  const theme = useTheme()
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
      borderColor={highlightColor !== '$inputColor' ? highlightColor : '$inputBackground'}
      borderWidth={'$px1'}
    >
      <Stack
        w={'$10'}
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%', color: '$red' }}
      >
        {getAppIcon({ icon, color: theme[highlightColor.slice(1)].val, size: 20 })}
      </Stack>
      <Input
        nativeID={name}
        onChangeText={(e) => onChange(e, name)}
        color={highlightColor}
        value={value}
        placeholder={placeholder}
        secureTextEntry={name.includes('password')}
      />
    </XStackFullW>
  )
}

export default InputWithIcon
