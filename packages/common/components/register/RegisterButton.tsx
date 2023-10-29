import { Button } from '@packages/ui/src/components'
import React from 'react'
import { useLink } from 'solito/link'

const RegisterButton = () => {
  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <Button {...registerLinkProps} mb="$2.5" size="large" background="red">
      Kayıt Ol
    </Button>
  )
}

export default RegisterButton
