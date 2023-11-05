import React from 'react'
import { Paragraph, YStack, H4, XStack, Square } from '@packages/ui'
import { Button, Card, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'
import { useAppImages } from '@packages/common/hooks'
import { ScreenContainer } from '@packages/common/components'
import { VerifyCodeCard } from '@packages/common/components/cards'

export default function MailRegisterScreen() {
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
          title="E-Posta Doğrulama"
          description="Kodunuzu e-posta adresinize gönderdik."
          mail="gokhan*****@gmail.com"
          counter="03:15"
        />
      </YStackFullW>
    </ScreenContainer>
  )
}
