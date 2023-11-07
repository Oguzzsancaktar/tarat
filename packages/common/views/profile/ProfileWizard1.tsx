import React from 'react'
import { Avatar, H1, Paragraph, View } from '@packages/ui'

import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'

export default function ProfileWizard1() {
  const nextLinkProps = useLink({
    href: '/wizard/profileWizard2',
  })
  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
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
            {/* @todo names */}
            <InputWithIcon
              name="xxx"
              error={false}
              icon="user"
              placeholder="Ad Soyad"
              value={''}
              onChange={() => {}}
            />
            <View mt={'$3'}>
              <InputWithIcon
                name="xxx"
                error={false}
                icon="cake"
                placeholder="Doğum Tarihi"
                value={''}
                onChange={() => {}}
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
