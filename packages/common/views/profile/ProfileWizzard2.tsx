import React from 'react'
import { H1, Paragraph, View, YStack } from '@packages/ui'

import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'

export default function ProfileWizzard2() {
  const prevLinkProps = useLink({
    href: '/wizzard/profileWizzard1',
  })
  const nextLinkProps = useLink({
    href: '/wizzard/profileMain',
  })
  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack style={{ height: '100%' }} jc={'space-between'}>
        <YStackFullW>
          <YStackFullW>
            {/* HEADER */}
            <H1 ta={'center'} color={'$heading'}>
              İletişim Bilgileri
            </H1>
            <Paragraph ta={'center'} color={'$textGray'}>
              TARAT’ınızla size ulaşabilmemiz için iletişim bilgilerini paylaş.
            </Paragraph>
          </YStackFullW>
        </YStackFullW>

        {/* INPUTS */}
        <YStackFullW mt={'$2'}>
          <InputWithIcon
            name="phone"
            error={false}
            icon="call"
            placeholder="Cep Telefonu"
            success={false}
            onChange={() => {}}
            value={''}
          />
          <View mt={'$2'}>
            <InputWithIcon
              name="phone"
              error={false}
              icon="call"
              placeholder="Sabit Hat"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="instagram"
              error={false}
              icon="key"
              placeholder="Instagram"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="facebook"
              error={false}
              icon="key"
              placeholder="Facebook"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="x"
              error={false}
              icon="key"
              placeholder="x"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="x"
              error={false}
              icon="key"
              placeholder="X"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="linkedin"
              error={false}
              icon="key"
              placeholder="LinkedIn"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
          <View mt={'$2'}>
            <InputWithIcon
              name="github"
              error={false}
              icon="key"
              placeholder="GitHub"
              success={false}
              value={''}
              onChange={() => {}}
            />
          </View>
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
