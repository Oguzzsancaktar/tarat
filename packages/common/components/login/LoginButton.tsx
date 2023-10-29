import { Button } from '@packages/ui/src/components'
import React from 'react'
import { useLink } from 'solito/link'

interface IProps {
  size?: 'small' | 'medium' | 'large'
}
const LoginButton: React.FC<IProps> = ({ size = 'large' }) => {
  const loginLinkProps = useLink({
    href: '/login',
  })

  return (
    <Button {...loginLinkProps} size={size} background="gray">
      Giriş Yap
    </Button>
  )
}

export default LoginButton
