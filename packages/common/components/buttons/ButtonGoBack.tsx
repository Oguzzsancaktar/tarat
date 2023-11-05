import React from 'react'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { Button } from '@packages/ui/src/components'
import { router } from 'expo-router'

const ButtonGoBack = () => {
  const handleBackClick = () => {
    router.back()
  }

  return <Button onPress={handleBackClick} type={'goBack'} icon={<ArrowLeft size={'$5'} />} />
}

export default ButtonGoBack
