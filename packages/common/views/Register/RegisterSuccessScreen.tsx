import React, { useState } from 'react'
import { YStack } from '@packages/ui'

import { ScreenContainer, StatusBox } from '@packages/common/components'

export default function MailRegisterScreen() {
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack style={{ height: '100%' }} jc={'center'} ai={'center'}>
        <StatusBox />
      </YStack>
    </ScreenContainer>
  )
}
