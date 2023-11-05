import React, { useMemo } from 'react'
import { YStackFullW, Button } from '@packages/ui/src/components'
import { H1, Text, useToastController, View, YStack } from '@packages/ui'
import {
  ButtonGoBack,
  RegisterCredentialsForm,
  RegisterPhoneOTP,
  ScreenContainer,
  SocialSign,
} from '../..'
import {
  EReducerActionKind,
  useRegisterApiContext,
  useRegisterStateContext,
} from '@packages/common/context/registerContext'
import StatusResultContent from '../../status-result/StatusResultContent'
import { useRouter } from 'solito/router'
import { validationUtils } from '@packages/common/utils'

const RegisterWizard = () => {
  const toast = useToastController()
  const { step: stepIndex, data: registerState } = useRegisterStateContext()
  const { changeStep, setValidation } = useRegisterApiContext()
  const router = useRouter()

  const step = useMemo(() => {
    switch (stepIndex) {
      case 0:
        return { component: <RegisterCredentialsForm />, title: 'Yeni Hesap Oluştur' }
      case 1:
        return { component: <RegisterPhoneOTP />, title: 'Telefon numaranı gir' }
      case 2:
        // @todo get from messages
        return {
          component: (
            <StatusResultContent
              status="success"
              message="Tebrikler başarı ile kayıt oldunuz!"
              title="Kayıt Başarılı!"
            />
          ),
        }
      default:
        return { component: <RegisterCredentialsForm />, title: 'Yeni Hesap Oluştur' }
    }
  }, [stepIndex])

  const handleStepClick = (type: EReducerActionKind.NEXT | EReducerActionKind.PREV) => {
    const validationResult = validationUtils.validateRegisterData(registerState)

    if (stepIndex === 0) {
      validationResult.phone = false
      if (validationResult.errorMessage.toLocaleLowerCase().includes('phone')) {
        validationResult.errorMessage = ''
      }
    }

    console.log('validationResult', validationResult, stepIndex)

    if (type === EReducerActionKind.PREV) {
      if (stepIndex === 0) {
        return router.push('/')
      } else {
        return changeStep(type)
      }
    }

    if (type === EReducerActionKind.NEXT) {
      if (stepIndex === 2) {
        return router.push('/login')
      } else {
        setValidation(validationResult)

        if (validationResult.errorMessage === '') {
          changeStep(type)
        } else {
          toast.show('Lütfen Dikkat!', {
            message: validationResult.errorMessage,
            burntOptions: {
              haptic: 'error',
            },
            style: {
              background: 'red',
              color: 'white',
              border: '2px solid red',
            },
          })
        }
      }
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
        <YStackFullW alignItems="center" justifyContent="center">
          {/* Wizard Title */}
          {/* @todo */}
          <H1 color={'$heading'} mb={'$space.10'}>
            {step.title}
          </H1>
          {/* Wizard Content */}
          {step.component}
        </YStackFullW>

        {/* Wizard Bottom */}

        <YStack mt={'$space.3'}>
          <Button onPress={() => handleStepClick(EReducerActionKind.NEXT)} mb={'$4'}>
            {stepIndex === 2 ? 'GİRİŞ YAP' : 'İLERİ'}
          </Button>
          {stepIndex === 0 && <SocialSign type="login" />}
        </YStack>
      </YStackFullW>
    </ScreenContainer>
  )
}

export default RegisterWizard
