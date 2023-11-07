import React from 'react'
import { H1, Paragraph, View, YStack } from '@packages/ui'

import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { useLink } from 'solito/link'

export default function ProfileWizard2() {
  const prevLinkProps = useLink({
    href: '/wizard/profileWizard1',
  })
  const nextLinkProps = useLink({
    href: '/wizard/profileMain',
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
            onChange={() => {}}
            value={''}
          />
          <View mt={'$2'}>
            <InputWithIcon
              name="phone"
              error={false}
              icon="call"
              placeholder="Sabit Hat"
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
