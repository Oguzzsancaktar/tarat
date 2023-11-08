import React, { useState } from 'react'
import { ScreenContainer } from '@packages/common/components'
import { useAppImages } from '@packages/common/hooks'
import { H3, Image, Paragraph } from '@packages/ui'
import { View } from '@tamagui/core'
import { map } from 'lodash'
import { Button, XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScrollView } from 'react-native'
import getAppIcon, { IIcon } from '@packages/common/components/icons/getAppIcon'
import { APP_COLORS } from '@packages/common/constants'

interface IWizardItem {
  title: string
  description: string
  icon: IIcon
}
// @todo oğuz
const WIZARD_ITEMS: IWizardItem[] = [
  {
    title: "Başarı ile \nTARAT'ın",
    description:
      'Şimdi taratını kullanan insanları \nbilgilendirmek için sihirbazı kullanarak \n tamamla.',
    icon: 'arrow-right',
  },
]

export default function QrWizard() {
  const [wizardData, setWizardData] = useState(WIZARD_ITEMS)
  const appImages = useAppImages()
  return (
    <ScreenContainer horizontalPadding={false} verticalPadding={false} showGoBackButton={false}>
      <YStackFullW>
        <ScrollView>
          {/* BG */}
          <View jc={'space-between'} ai={'center'}>
            <Image overflow="visible" width={'100%'} source={appImages.qrWizardBG} />
          </View>
        </ScrollView>

        {/* Title,Description */}
        {map(wizardData, (item, index) => (
          <YStackFullW mt="$3" key={index}>
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
