import React from 'react'
import { YStack } from '@packages/ui'
import { useLink } from 'solito/link'
import { ScreenContainer, StatusBox } from 'common/components'

export default function MailRegisterScreen() {
  const welcomeLinkProps = useLink({
    href: '/',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack style={{ height: '100%' }} jc={'center'} ai={'center'}>
        <StatusBox />
      </YStack>
    </ScreenContainer>
  )
}
