import React from 'react'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { Button } from '@packages/ui/src/components'

const ButtonGoBack = () => {
  const welcomeLinkProps = useLink({
    href: '/',
  })

  return <Button {...welcomeLinkProps} type={'circle'} background="orange" icon={<ArrowLeft />} />
}

export default ButtonGoBack
