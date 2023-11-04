import { Facebook, MailPlus } from '@tamagui/lucide-icons'
import React from 'react'
import { XStack, Paragraph, Separator, YStack } from '@packages/ui'
import { Button, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'
import { getAppIcon } from '../../icons'

const texts = {
  signin: {
    desc: 'Hesabınız var mı?',
    title: 'Giriş Yap',
  },
  register: {
    desc: 'Hesabınız yok mu?',
    title: 'Kaydol',
  },
}

interface IProps {
  type: 'signin' | 'register'
}

const SocialSign: React.FC<IProps> = ({ type }) => {
  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <YStackFullW justifyContent="center" alignItems="center">
      <XStack jc="center">
        <Paragraph size={'$3'} color={'$textGray'}>
          {texts[type].desc}{' '}
        </Paragraph>
        <Paragraph {...registerLinkProps} size={'$3'} color={'$red'}>
          {texts[type].title}
        </Paragraph>
      </XStack>

      <Separator borderColor={'$textGray'} my="$space.1" height={'$10'} width={'$40'} />

      <Paragraph color={'$textGray'} ta="center" size={'$3'}>
        Sosyal Medya ile devam et
      </Paragraph>

      <XStack ai="center" jc="center" mt="$space.4">
        <Button background="orange30" w={'$10'} ml={10} type="circle">
          {getAppIcon({ icon: 'facebook', color: '', size: 30 })}
        </Button>
        <Button background="orange30" w={'$10'} ml={10} type="circle">
          {getAppIcon({ icon: 'google', color: 'blue', size: 25 })}
        </Button>
      </XStack>
    </YStackFullW>
  )
}

export default SocialSign
