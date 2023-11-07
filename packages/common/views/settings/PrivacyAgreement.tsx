import { H4 } from '@packages/ui'
import React from 'react'
import { YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'

export default function SettingScreen() {
  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }}>
        <H4 ta={'center'}> Gizlilik Sözleşmesi</H4>
      </YStackFullW>
    </ScreenContainer>
  )
}
