import React from 'react'
import { Paragraph, YStack, H4, XStack, Square } from '@packages/ui'
import { Button, Card, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ScreenContainer } from '@packages/common/components'
import { VerifyCodeCard } from '@packages/common/components/cards'

export default function MailPhoneScreen() {
  const appImages = useAppImages()
  const loginLinkProps = useLink({
    href: '/login',
  })
  const registerLinkProps = useLink({
    href: '/register',
  })
  const resetLinkProps = useLink({
    href: '/login/reset',
  })

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW ai={'center'} style={{ height: '100%' }}>
        <VerifyCodeCard
          title="Telefon Doğrulama"
          description="Kodunuzu telefon numaranıza gönderdik."
          mail="+90(555)-555-55-55"
          counter="03:15"
        />
      </YStackFullW>
    </ScreenContainer>
  )
}
