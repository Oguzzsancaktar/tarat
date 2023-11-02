import React from 'react'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
import { Button } from '@packages/ui/src/components'

const ButtonGoBack = () => {
  const welcomeLinkProps = useLink({
    href: '/',
  })

  return (
    <Button
      {...welcomeLinkProps}
      icon={<ArrowLeft />}
      w={50}
      h={50}
      mt={'$3'}
      ml={'$3'}
      backgroundColor="#F8B40120"
      color={'#F8B401'}
    />
  )
}

export default ButtonGoBack
