import { Button } from '@packages/ui/src/components'
import React from 'react'
import { useLink } from 'solito/link'

const LoginButton = () => {
  const loginLinkProps = useLink({
    href: '/login',
  })

  return (
    <Button {...loginLinkProps} size="large" background="gray">
      Giriş Yap
    </Button>
  )
}

export default LoginButton
