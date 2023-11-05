import React, { useMemo } from 'react'
import { YStackFullW, Button } from '@packages/ui/src/components'
import { H1, Text, View, YStack } from '@packages/ui'
import {
  ButtonGoBack,
  RegisterCredentialsForm,
  RegisterPhoneOTP,
  ScreenContainer,
  SocialSign,
} from '../../../components'
import {
  EReducerActionKind,
  useRegisterApiContext,
  useRegisterStateContext,
} from '@packages/common/context/registerContext'
import StatusResultContent from '../../status-result/StatusResultContent'
import { useRouter } from 'solito/router'

const RegisterWizzard = () => {
  const { step: stepIndex } = useRegisterStateContext()
  const { changeStep } = useRegisterApiContext()
  const router = useRouter()

  const step = useMemo(() => {
    switch (stepIndex) {
      case 0:
        return { component: <RegisterCredentialsForm />, title: 'Yeni Hesap Oluştur' }
      case 1:
        return { component: <RegisterPhoneOTP />, title: 'Telefon numaranı gir' }
      case 2:
        return { component: <StatusResultContent />, title: '' }
      default:
        return { component: <RegisterCredentialsForm />, title: 'Yeni Hesap Oluştur' }
    }
  }, [stepIndex])

  const handleStepClick = (type: EReducerActionKind.NEXT | EReducerActionKind.PREV) => {
    if (type === EReducerActionKind.PREV && stepIndex === 0) {
      router.push('/')
    } else if (stepIndex === 2) {
      router.push('/login')
    } else {
      changeStep(type)
    }
  }

  return (
    <ScreenContainer showGoBackButton={false}>
      {stepIndex !== 2 && (
        <View zIndex={'$9' as any} position="absolute" top="$space.10" left="$space.5">
          <ButtonGoBack onClick={() => handleStepClick(EReducerActionKind.PREV)} />
        </View>
      )}
      <YStackFullW style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW>
          {/* Wizzard Title */}
          {/* @todo */}
          <H1 color={'$heading'} mb={'$space.10'}>
            {step.title}
          </H1>
          {/* Wizzard Content */}
          {step.component}
        </YStackFullW>

        {/* Wizzard Bottom */}

        <YStack mt={'$space.3'}>
          <Button onPress={() => handleStepClick(EReducerActionKind.NEXT)} mb={'$4'}>
            {stepIndex === 2 ? 'ANASAYFA' : 'İLERİ'}
          </Button>
          {stepIndex === 0 && <SocialSign type="login" />}
        </YStack>
      </YStackFullW>
    </ScreenContainer>
  )
}

export default RegisterWizzard
