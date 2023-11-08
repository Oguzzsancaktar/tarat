import React, { useState } from 'react'
import { ArrowRightIcon, MailIcon, ScreenContainer } from '@packages/common/components'
import { useAppImages } from '@packages/common/hooks'
import { H3, H4, Image, Paragraph } from '@packages/ui'
import { ColorTokens, ThemeValueFallbackColor, View } from '@tamagui/core'
import { map } from 'lodash'
import { Button, Card, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScrollView } from 'react-native'
import getAppIcon, { IIcon } from '@packages/common/components/icons/getAppIcon'
import { APP_COLORS } from '@packages/common/constants'

interface IWizardItem {
  title: string
  description: string
  icon: IIcon
}

const WIZARD_ITEMS: IWizardItem[] = [
  {
    title: "Senin TARAT'ın \nhangisi?",
    description:
      'Bilgileri kolayca girebilmen için TARAT’ı \ntiplere ayırdık bu sayede bilgilerini \ngirebilirsin.',
    icon: 'arrow-right',
  },
]

interface IContentItem {
  title: string
  description: string
  color: ColorTokens | ThemeValueFallbackColor
  icon: IIcon
}

const CONTENT_ITEMS: IContentItem[] = [
  {
    title: 'Araç',
    description: 'Araba, gemi, motor gibi araçlarınız için size bilgi versinler',
    color: '$purple',
    icon: 'mail',
  },
  {
    title: 'Mekan',
    description:
      'Ev ofis fabrika gibi alanlarda siz yokken \nsize ulaşabilmeleri için  bilgilendirin.',
    color: '$blue',
    icon: 'home',
  },
  {
    title: 'Tasma',
    description: 'Üzücü ama bazen evcil hayvanlarımız \nistemeden bizden uzaklaşabiliyor.',
    color: '$green',
    icon: 'home',
  },
  {
    title: 'İlan',
    description: 'Satış yapmal için birebir.',
    color: '$pink',
    icon: 'home',
  },
]

export default function QrWizard1() {
  const [wizardData, setWizardData] = useState(WIZARD_ITEMS)
  const [contentData, setContentData] = useState(CONTENT_ITEMS)
  const appImages = useAppImages()

  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW>
        <ScrollView>
          {map(contentData, (item, index) => (
            <Button
              mb={'$5'}
              paddingRight={100}
              borderColor={item.color}
              backgroundColor={item.color + '30'}
              h={111}
            >
              <XStackFullW>
                <Button
                  icon={getAppIcon({ color: APP_COLORS.white, icon: item.icon, size: 24 })}
                  w={55}
                  h={55}
                  mt={'$3'}
                  ml={'$3'}
                  backgroundColor={item.color}
                  borderColor={'transparent'}
                  type="circle"
                />

                <YStackFullW ml={'$3'} key={index}>
                  <H4 color={'$white'} ta={'left'}>
                    {item.title}
                  </H4>

                  <Paragraph color={'$white'} ta={'left'} fontSize={14}>
                    {item.description}
                  </Paragraph>
                </YStackFullW>
              </XStackFullW>
            </Button>
          ))}
        </ScrollView>
        {/* Title, Description */}
        {map(wizardData, (item, index) => (
          <YStackFullW mt={'$1'} key={index}>
            <H3 color={'$color.primary'}>{item.title}</H3>
            <XStackFullW>
              <Paragraph color={'$color.textGray'}>{item.description}</Paragraph>
              <Button
                ml={'$10'}
                mt={'$7'}
                icon={getAppIcon({ color: APP_COLORS.white, icon: item.icon, size: 24 })}
                size="sm"
                color={'$color.primary'}
                type="next"
              />
            </XStackFullW>
          </YStackFullW>
        ))}
      </YStackFullW>
    </ScreenContainer>
  )
}
