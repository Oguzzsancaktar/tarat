import { Button } from '@packages/ui/src/components'
import React from 'react'
import { useLink } from 'solito/link'

interface IProps {
  size?: 'small' | 'medium' | 'large'
}
const RegisterButton: React.FC<IProps> = ({ size = 'large' }) => {
  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <Button {...registerLinkProps} size={size} background="red">
      Kayıt Ol
    </Button>
  )
}

export default RegisterButton
