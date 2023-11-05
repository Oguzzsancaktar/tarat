import React from 'react'
import { H1, Paragraph, View, YStack } from '@packages/ui'

import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'

export default function ProfileWizzard3() {
  const prevLinkProps = useLink({
    href: '/wizzard/profileWizzard2',
  })
  const nextLinkProps = useLink({
    href: '/register/success',
  })
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW>
          <YStackFullW>
            {/* HEADER */}
            <H1 ta={'center'} color={'$heading'}>
              Adres Bilgisi
            </H1>
            <Paragraph ta={'center'} color={'$textGray'}>
              Adres bilginiz paylaşılmayacaktır hızlı sipariş için saklanacaktır.{' '}
            </Paragraph>
          </YStackFullW>
        </YStackFullW>

        {/* INPUTS */}
        <YStackFullW>
          <InputWithIcon error={false} icon="key" placeholder="Ülke" success={false} value={''} />
          <XStackFullW>
            <InputWithIcon error={false} icon="key" placeholder="Ülke" success={false} value={''} />
            <InputWithIcon error={false} icon="key" placeholder="Ülke" success={false} value={''} />
          </XStackFullW>
        </YStackFullW>

        {/* TAB */}
        <XStackFullW jc={'space-between'}>
          <Paragraph {...prevLinkProps} color={'$orange'} ta={'right'}>
            Geri
          </Paragraph>
          <Paragraph {...nextLinkProps} color={'$orange'} ta={'right'}>
            İleri
          </Paragraph>
        </XStackFullW>
      </YStack>
    </ScreenContainer>
  )
}
