import { Checkbox, H1, Label, Popover } from '@packages/ui'
import React from 'react'
import { Button, Card, Input, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'
import { ChevronDown, Check } from '@tamagui/lucide-icons'

export default function ContactForm() {
  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <H1 color={'$heading'}>İletişim Formu</H1>
      <YStackFullW mt={'$7'} ai={'center'} style={{ height: '100%' }}>
        <Button
          borderColor={'$orange30'}
          px={'$3'}
          jc={'space-between'}
          backgroundColor={'$inputBackground'}
        >
          <Label ta={'left'} color={'$textGray'}>
            İletişim Tipi
          </Label>
          <Popover>
            <ChevronDown color={'$orange'} />
          </Popover>
        </Button>

        <Input
          borderColor={'$orange30'}
          borderRadius={'$15'}
          mt={'$4'}
          py={'$20'}
          placeholder="Mesajınız..."
        />
        <XStackFullW mt={'$3'}>
          <Checkbox size={'$10'} backgroundColor={'$inputBackground'} borderColor={'$orange30'}>
            <Checkbox.Indicator>
              <Check size={'$7'} color={'$orange'} />
            </Checkbox.Indicator>
          </Checkbox>
          <Label ml={'$2'} color={'$textGray'}>
            Ben Robot Değilim.
          </Label>
        </XStackFullW>
      </YStackFullW>
    </ScreenContainer>
  )
}
