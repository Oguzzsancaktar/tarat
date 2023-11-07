import { Checkbox, H1, Label, Popover } from '@packages/ui'
import React from 'react'
import { Button, Card, Input, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { InputWithIcon, ScreenContainer } from '@packages/common/components'
import { ChevronDown, Check } from '@tamagui/lucide-icons'

export default function ContactForm() {
  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <H1 color={'$heading'}>İletişim Formu</H1>
      <YStackFullW mt={'$7'} ai={'center'} style={{ height: '100%' }}>
        {/* Ülke */}
        <Card
          w={'100%'}
          borderColor={'$orange30'}
          jc={'space-between'}
          backgroundColor={'$inputBackground'}
        >
          <InputWithIcon
            name="country"
            value={() => {}}
            error={false}
            placeholder="Ülke"
            icon="location"
          />
        </Card>

        <XStackFullW style={{ width: '100%' }}>
          {/* İl */}
          <Card
            mt="$3"
            mr="$3"
            w="45%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Şehir"
              icon="location"
            />
          </Card>
          {/* İlçe */}
          <Card
            mt="$3"
            maw="50%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="İlçe"
              icon="location"
            />
          </Card>
        </XStackFullW>
        <XStackFullW style={{ width: '100%' }}>
          {/* Mahalle */}
          <Card
            mt="$3"
            mr="$3"
            w="45%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Mahalle"
              icon="location"
            />
          </Card>
          {/* Semt */}
          <Card
            mt="$3"
            maw="50%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Semt"
              icon="location"
            />
          </Card>
        </XStackFullW>
        <XStackFullW style={{ width: '100%' }}>
          {/* Sokak */}
          <Card
            mt="$3"
            mr="$3"
            w="45%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Sokak"
              icon="location"
            />
          </Card>
          {/* Apt. Adı */}
          <Card
            mt="$3"
            maw="50%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Apt. Adı"
              icon="location"
            />
          </Card>
        </XStackFullW>
        <XStackFullW style={{ width: '100%' }}>
          {/* Daire No. */}
          <Card
            mt="$3"
            mr="$3"
            w="45%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Daire No."
              icon="location"
            />
          </Card>
          {/* Apt. No. */}
          <Card
            mt="$3"
            maw="50%"
            borderColor={'$orange30'}
            jc={'space-between'}
            backgroundColor={'$inputBackground'}
          >
            <InputWithIcon
              name="country"
              value={() => {}}
              error={false}
              placeholder="Apt. No."
              icon="location"
            />
          </Card>
        </XStackFullW>
        {/* Adres Tarifi*/}
        <Card
          mt="$3"
          maw="100%"
          height={'$size.30'}
          borderColor={'$orange30'}
          jc={'space-between'}
          backgroundColor={'$inputBackground'}
        >
          <InputWithIcon
            name="country"
            value={() => {}}
            error={false}
            placeholder="Adres Tarifi"
            icon="location"
          />
        </Card>
      </YStackFullW>
    </ScreenContainer>
  )
}
