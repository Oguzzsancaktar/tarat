import React, { useMemo, useState } from 'react'
import { Input, XStackFullW } from '@packages/ui/src/components'
import { Stack, useTheme } from '@packages/ui'
import { getAppIcon } from '../icons'
import { IIcon } from '../icons/getAppIcon'

interface IProps {
  placeholder: string
  error: boolean
  icon: IIcon
  value: string
  name: string
  onChange: (value: string, key: string) => void
}
const InputWithIcon: React.FC<IProps> = ({ placeholder, error, icon, value, name, onChange }) => {
  const theme = useTheme()

  const [isFocused, setIsFocused] = useState(false)
  const highlightColor = useMemo(() => {
    if (error) {
      return '$red'
    }
    if (isFocused) {
      return '$orange'
    }
    return '$inputColor'
  }, [error, isFocused])

  return (
    <XStackFullW
      // @todo: tamabug
      borderRadius={'$radius.15' as any}
      overflow={'hidden'}
      alignItems="center"
      height={'$10'}
      borderColor={highlightColor === '$inputColor' ? '$inputBackground' : highlightColor}
      backgroundColor={'$inputBackground'}
      borderWidth={'$px1'}
    >
      <Stack w={'$10'} justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        {getAppIcon({ icon, color: theme[highlightColor.slice(1)].val, size: 20 })}
      </Stack>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
