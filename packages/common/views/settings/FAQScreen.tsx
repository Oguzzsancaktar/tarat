import React, { useState } from 'react'
import { Accordion, H2, ListItem, Paragraph, Square } from '@packages/ui'
import { InputWithIcon, ScreenContainer } from '../../components'
import { Card, YStackFullW } from '@packages/ui/src/components'
import { ChevronDown } from '@tamagui/lucide-icons'
import { ScrollView } from 'react-native'
import { map } from 'lodash'

interface IFaqItem {
  title: string
  description: string
}

const FAQ_ITEMS: IFaqItem[] = [
  {
    title: 'Kimin Fikri?',
    description: 'Gökhan.',
  },
  {
    title: 'Bu bir soru mu?',
    description: 'Evet bu bir soru.',
  },
  {
    title: 'Bu bir soru mu?',
    description: 'Evet bu bir soru.',
  },
  {
    title: 'Bu bir soru mu?',
    description: 'Evet bu bir soru.',
  },
  {
    title: 'Bu bir soru mu?',
    description: 'Evet bu bir soru.',
  },
]

export default function FAQScreen() {
  const [faqData, setFaqData] = useState(FAQ_ITEMS)
  const [searchFilter, setSearchFilter] = useState('')
  const handleFaq = (text) => {
    console.log('INPUT_VALUE', text)
    setSearchFilter(text)
    filterFaqData(text)
  }
  const filterFaqData = (filter) => {
    const filteredData = FAQ_ITEMS.filter((item) => {
      const title = item.title.toLowerCase()
      const description = item.description.toLowerCase()
      return title.includes(filter.toLowerCase()) || description.includes(filter.toLowerCase())
    })
    setFaqData(filteredData)
  }
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
                onChange={(text) => handleFaq(text)}
                value={searchFilter}
              />
            </ListItem>
          </Card>

          {/* ACCORDION */}
          <YStackFullW ai={'center'}>
            <Card mt={'$3'} backgroundColor={'$inputBackground'}>
              <Accordion backgroundColor={'transparent'} w={'100%'} type="multiple">
                {map(faqData, (item, index) => {
                  return (
                    <Accordion.Item key={index} value={`q${index}`}>
                      <Accordion.Trigger
                        borderColor={'transparent'}
                        backgroundColor={'transparent'}
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        {({ open }) => (
                          <>
                            <Paragraph color={'$textGray'}>{item.title}</Paragraph>
                            <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                              <ChevronDown color={'$orange'} size="$4" />
                            </Square>
                          </>
                        )}
                      </Accordion.Trigger>
                      <Accordion.Content pl={'$3'} borderRadius={20} backgroundColor={'$orange30'}>
                        <Paragraph color={'$textGray'}>{item.description}</Paragraph>
                      </Accordion.Content>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
            </Card>
          </YStackFullW>
        </YStackFullW>
      </ScreenContainer>
    </ScrollView>
  )
}
