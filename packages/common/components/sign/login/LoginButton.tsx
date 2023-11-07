import React from 'react'
import { useAppRoutes } from '@packages/common/hooks'
import { Button } from '@packages/ui/src/components'

interface IProps {
  size?: 'small' | 'medium' | 'large'
}
const LoginButton: React.FC<IProps> = () => {
  const { loginLinkProps } = useAppRoutes()

  return <Button {...loginLinkProps}>Giriş Yap</Button>
}

export default LoginButton
