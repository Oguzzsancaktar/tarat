import React from 'react'
import { YStackFullW } from '@packages/ui/src/components'
import { InputWithIcon } from '../..'
import {
  useRegisterStateContext,
  useRegisterApiContext,
} from '@packages/common/context/registerContext'

const RegisterPhoneOTP = () => {
  const { data: registerState, validation } = useRegisterStateContext()
  const { setData } = useRegisterApiContext()

  const handleInputChange = (val: string, key: string) => {
    const tempState = { ...registerState }
    tempState[key] = val
    setData(tempState)
  }

  return (
    <YStackFullW>
      <InputWithIcon
        name="phone"
        onChange={handleInputChange}
        error={validation.phone}
        value={registerState.phone}
        icon="user"
        placeholder="Telefon Numarası"
      />
    </YStackFullW>
  )
}

export default RegisterPhoneOTP
