import { H1, H2, H3, Label, ListItem, ScrollView, Text, useTheme, View, XStack } from '@packages/ui'
import React, { useState } from 'react'
import { XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { getAppIcon, ScreenContainer } from '@packages/common/components'
import { Switch } from '@packages/ui/src/components'
import { IIcon } from '@packages/common/components/icons/getAppIcon'
import { map } from 'lodash'

interface ISettingsItem {
  icon: IIcon
  title: string
  type: 'switch' | 'button'
  action?: () => void
}

const SETTING_ITEMS: ISettingsItem[] = [
  {
    icon: 'apple',
    title: 'Hesap Ayarları',
    type: 'button',
    action: () => {},
  },
  {
    icon: 'google',
    title: 'İletişim Bilgileri',
    type: 'button',
    action: () => {},
  },
  {
    icon: 'call',
    title: 'Sık Sorulan Sorular',
    type: 'button',
    action: () => {},
  },
  {
    icon: 'settings',
    title: 'Gizlilik Sözleşmesi',
    type: 'button',
    action: () => {},
  },
  {
    icon: 'location',
    title: 'Bildirimler',
    type: 'switch',
    action: () => {},
  },
  {
    icon: 'dark-mode',
    title: 'Koyu Görünüş',
    type: 'switch',
    action: () => {},
  },
  {
    icon: 'mail',
    title: 'E-posta Bilgilendirme',
    type: 'switch',
    action: () => {},
  },
  {
    icon: 'badge',
    title: 'Bize Ulaşın',
    type: 'button',
    action: () => {},
  },
  {
    icon: 'cake',
    title: 'Çıkış Yap',
    type: 'button',
    action: () => {},
  },
]

const IconBackgrounded: React.FC<{ icon: IIcon }> = ({ icon }) => {
  const theme = useTheme()
  return (
    <View
      ai={'center'}
      justifyContent="center"
      backgroundColor="$orange30"
      borderRadius="$borderRadius.2"
      width={'$9'}
      height={'$9'}
    >
      {getAppIcon({ icon: icon, color: theme.orange.val, size: 25 })}
    </View>
  )
}

const SettingsItem: React.FC<ISettingsItem> = ({ icon, title, type, action }) => {
  const theme = useTheme()

  return (
    <XStackFullW ai={'center'} justifyContent="space-between">
      <XStack alignItems="center">
        <IconBackgrounded icon={icon} />
        <Text ml="$space.2" fontWeight={300}>
          {title}
        </Text>
      </XStack>

      {type === 'button' ? (
        <View>{getAppIcon({ icon: 'arrow-right', color: theme.textGray.val, size: 15 })}</View>
      ) : (
        <Switch.SwitchFrame checked={true}>
          <Switch.SwitchThumb />
        </Switch.SwitchFrame>
      )}
    </XStackFullW>
  )
}

export default function SettingScreen() {
  const [isChecked, setIsChecked] = useState({
    isCheckedNotify: true,
    isCheckedInstagram: true,
    isCheckedFacebook: true,
    isCheckedX: true,
    isCheckedAppIcon: true,
    isCheckedDarkTheme: true,
  })

  const handleSwitchPress = (key) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  return (
    <ScreenContainer
      title={'Ayarlar'}
      horizontalPadding={true}
      verticalPadding={true}
      showGoBackButton={true}
    >
      <YStackFullW style={{ height: '100%' }}>
        <ScrollView mb="$space.25" pr="$space.2">
          {map(SETTING_ITEMS, (item, index) => {
            return (
              <ListItem key={index} mb="$space.3" ml={0}>
                <SettingsItem {...item} />
              </ListItem>
            )
          })}
        </ScrollView>
      </YStackFullW>
    </ScreenContainer>
  )
}
