import React, { useState } from 'react'
import { ScreenContainer } from '@packages/common/components'
import { useAppImages } from '@packages/common/hooks'
import { H3, H4, Paragraph } from '@packages/ui'
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
    title: 'Araç bilgilerini \ndoldur?',
    description: 'Aracın hakkında TARAT’ının bilgilenmesini \nsağla.',
    icon: 'arrow-right',
  },
]

interface IContentItem {
  title: string
  description: string
  color: ColorTokens | ThemeValueFallbackColor
}

const CONTENT_ITEMS: IContentItem[] = [
  {
    title: 'Araç',
    description: 'Araç Tipi',
    color: '$inputBackground',
  },
  {
    title: 'Marka',
    description: 'Araç Markası',
    color: '$inputBackground',
  },
  {
    title: 'Model',
    description: 'Araç Modeli',
    color: '$inputBackground',
  },
  {
    title: 'Açıklama',
    description: 'Sıfır ayarında...',
    color: '$inputBackground',
  },
  {
    title: 'Yıl',
    description: 'Model Yılı',
    color: '$inputBackground',
  },
  {
    title: 'Km',
    description: 'Araç Kilometresi',
    color: '$inputBackground',
  },
  {
    title: 'Fiyat',
    description: 'Araç Fiyatı',
    color: '$inputBackground',
  },
  {
    title: 'Hasar',
    description: 'Araç Hasar Bilgisi',
    color: '$inputBackground',
  },
]
// @todo oğuz
export default function QrWizard1() {
  const [wizardData, setWizardData] = useState(WIZARD_ITEMS)
  const [contentData, setContentData] = useState(CONTENT_ITEMS)

  return (
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW style={{ width: '100%' }}>
        <ScrollView>
          {map(contentData, (item, index) => (
            <Card
              mb={'$5'}
              paddingLeft={30}
              paddingRight={30}
              backgroundColor={item.color}
              borderColor={item.color}
              h={60}
            >
              <XStackFullW jc={'space-between'}>
                <Paragraph color={'$heading'} ta={'left'}>
                  {item.title}
                </Paragraph>

                <Paragraph color={'$color.textGray'} ta={'left'} fontSize={14}>
                  {item.description}
                </Paragraph>
              </XStackFullW>
            </Card>
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
