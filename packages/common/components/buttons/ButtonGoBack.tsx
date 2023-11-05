import React from 'react'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { Button } from '@packages/ui/src/components'
import { useRouter } from 'solito/router'

interface IProps {
  onClick?: () => void
}
const ButtonGoBack: React.FC<IProps> = ({ onClick }) => {
  const router = useRouter()

  const handleBackClick = () => {
    if (onClick) {
      onClick()
    } else {
      router.back()
    }
  }

  return <Button onPress={handleBackClick} type={'goBack'} icon={<ArrowLeft size={'$5'} />} />
}

export default ButtonGoBack
