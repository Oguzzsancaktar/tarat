import React, { useState } from 'react'
import { Accordion, H1, H2, H3, H4, ListItem, Paragraph, Square } from '@packages/ui'
import { useLink } from 'solito/link'
import { InputWithIcon, ScreenContainer } from '../../components'
import { Card, YStackFullW } from '@packages/ui/src/components'
import { ChevronDown, Phone } from '@tamagui/lucide-icons'
import { Switch } from '@packages/ui/src/components/switch'
import { ScrollView } from 'react-native'
import { CallIcon } from '@packages/common/components/icons'
import { View } from '@tamagui/web'

export default function FAQScreen() {
  return (
    <ScrollView>
      <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
        <H2 mb={'$3'} ta={'left'} color={'$orange'}>
          Yardım
        </H2>
        <YStackFullW ai={'center'} style={{ height: '100%' }}>
          <Card backgroundColor="transparent">
            <ListItem backgroundColor={'transparent'} mt={'$3'}>
              <InputWithIcon
                icon="search"
                placeholder="Ne arıyorsun?"
                error={false}
                name="filter"
                onChange={() => {}}
                value={''}
              />
            </ListItem>
          </Card>

          {/* ACCORDION */}
          <YStackFullW ai={'center'}>
            <Card mt={'$3'} backgroundColor={'$inputBackground'}>
              <Accordion backgroundColor={'transparent'} w={'100%'} type="multiple">
                {/* SORU 1 */}
                <Accordion.Item value="q1">
                  <Accordion.Trigger
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {({ open }) => (
                      <>
                        <Paragraph color={'$textGray'}>Bu sık sorulan bir soru mu?</Paragraph>
                        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                          <ChevronDown color={'$orange'} size="$4" />
                        </Square>
                      </>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content pl={'$3'} borderRadius={'$2'} backgroundColor={'$orange30'}>
                    <Paragraph color={'$textGray'}>Evet bu sık sorulan bir soru.</Paragraph>
                  </Accordion.Content>
                </Accordion.Item>
                {/* SORU 2 */}
                <Accordion.Item value="q2">
                  <Accordion.Trigger
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {({ open }) => (
                      <>
                        <Paragraph color={'$textGray'}>Bu sık sorulan bir soru mu?</Paragraph>
                        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                          <ChevronDown color={'$orange'} size="$4" />
                        </Square>
                      </>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content pl={'$3'} borderRadius={'$2'} backgroundColor={'$orange30'}>
                    <Paragraph color={'$textGray'}>Evet bu sık sorulan bir soru.</Paragraph>
                  </Accordion.Content>
                </Accordion.Item>

                {/* SORU 3 */}
                <Accordion.Item value="q3">
                  <Accordion.Trigger
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {({ open }) => (
                      <>
                        <Paragraph color={'$textGray'}>Bu sık sorulan bir soru mu?</Paragraph>
                        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                          <ChevronDown color={'$orange'} size="$4" />
                        </Square>
                      </>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content pl={'$3'} borderRadius={'$2'} backgroundColor={'$orange30'}>
                    <Paragraph color={'$textGray'}>Evet bu sık sorulan bir soru.</Paragraph>
                  </Accordion.Content>
                </Accordion.Item>
                {/* SORU 4 */}
                <Accordion.Item value="q4">
                  <Accordion.Trigger
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {({ open }) => (
                      <>
                        <Paragraph color={'$textGray'}>Bu sık sorulan bir soru mu?</Paragraph>
                        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                          <ChevronDown color={'$orange'} size="$4" />
                        </Square>
                      </>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content pl={'$3'} borderRadius={'$2'} backgroundColor={'$orange30'}>
                    <Paragraph color={'$textGray'}>Evet bu sık sorulan bir soru.</Paragraph>
                  </Accordion.Content>
                </Accordion.Item>
                {/* SORU 5 */}
                <Accordion.Item value="q5">
                  <Accordion.Trigger
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {({ open }) => (
                      <>
                        <Paragraph color={'$textGray'}>Bu sık sorulan bir soru mu?</Paragraph>
                        <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                          <ChevronDown color={'$orange'} size="$4" />
                        </Square>
                      </>
                    )}
                  </Accordion.Trigger>
                  <Accordion.Content pl={'$3'} borderRadius={'$2'} backgroundColor={'$orange30'}>
                    <Paragraph color={'$textGray'}>Evet bu sık sorulan bir soru.</Paragraph>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </Card>
          </YStackFullW>
        </YStackFullW>
      </ScreenContainer>
    </ScrollView>
  )
}
