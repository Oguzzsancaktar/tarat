import React from 'react'
import { useAppRoutes } from '@packages/common/hooks'
import { Button } from '@packages/ui/src/components'

interface IProps {
  size?: 'small' | 'medium' | 'large'
}
const RegisterButton: React.FC<IProps> = () => {
  const { registerLinkProps } = useAppRoutes()
  return (
    <Button {...registerLinkProps} background="orange30">
      Kayıt Ol
    </Button>
  )
}

export default RegisterButton
