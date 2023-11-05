import React from 'react'
import { Avatar, H1, Paragraph, View } from '@packages/ui'

import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'

export default function ProfileWizzard1() {
  const nextLinkProps = useLink({
    href: '/wizzard/profileWizzard2',
  })
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW>
          {/* HEADER */}
          <H1 ta={'center'} color={'$heading'}>
            Kişisel Bilgiler
          </H1>
          <Paragraph ta={'center'} color={'$textGray'}>
            Seni tanımamız için bizimle kendi hakkındaki bilgileri paylaş.
          </Paragraph>
        </YStackFullW>
        {/* AVATAR */}
        <YStackFullW ai={'center'}>
          <Avatar circular size="$25">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          {/* INPUTS */}
          <YStackFullW mt={'$10'}>
            <InputWithIcon
              error={false}
              icon="key"
              placeholder="Ad Soyad"
              success={false}
              value={''}
            />
            <View mt={'$3'}>
              <InputWithIcon
                error={false}
                icon="key"
                placeholder="Doğum Tarihi"
                success={false}
                value={''}
              />
            </View>
          </YStackFullW>
        </YStackFullW>
        {/* TAB */}
        <YStackFullW>
          <Paragraph {...nextLinkProps} color={'$orange'} ta={'right'}>
            İleri
          </Paragraph>
        </YStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
