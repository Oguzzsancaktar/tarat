import React from 'react'
import { YStackFullW } from '@packages/ui/src/components'
import { View } from '@packages/ui'
import { InputWithIcon } from '../../../components'
import {
  useRegisterApiContext,
  useRegisterStateContext,
} from '@packages/common/context/registerContext'
import { map } from 'lodash'

const inputMock = {
  username: {
    placeholder: 'Kullanıcı adı',
    icon: 'user',
  },
  email: {
    placeholder: 'E-posta adresi',
    icon: 'email',
  },
  password: {
    placeholder: 'Şifre',
    icon: 'lock',
  },
  passwordConfirm: {
    placeholder: 'Şifre tekrar',
    icon: 'lock',
  },
}

const RegisterCredentialsForm = () => {
  const { data: registerState, validation } = useRegisterStateContext()
  const { setData } = useRegisterApiContext()

  const handleInputChange = (val: string, key: string) => {
    const tempState = { ...registerState }
    tempState[key] = val
    setData(tempState)
  }

  return (
    <YStackFullW>
      {map(registerState, (item, key) => {
        if (key === 'phone') {
          return null
        }
        return (
          <View mb={'$space.3'} key={key}>
            <InputWithIcon
              name={key}
              onChange={handleInputChange}
              error={validation[key]}
              value={registerState[key]}
              icon={inputMock[key].icon}
              placeholder={inputMock[key].placeholder}
            />
          </View>
        )
      })}
    </YStackFullW>
  )
}

export default RegisterCredentialsForm
