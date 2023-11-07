import { ListItem } from '@packages/ui'
import React, { useState } from 'react'
import { YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'
import { LocationIcon } from '@packages/common/components/icons'
import { ChevronRight, Trash } from '@tamagui/lucide-icons'
import LockIcon from '@packages/common/components/icons/LockIcon'

export default function AccountSettings() {
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
    // @todo oğuz iconlara background ekleyemedim
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }}>
        <ListItem
          hoverTheme
          pressTheme
          title="Şifre Değiştir"
          icon={LockIcon}
          iconAfter={ChevronRight}
        />

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title="Adres Güncelle"
          icon={LocationIcon}
          iconAfter={ChevronRight}
        />

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title=" Hesabı Sil"
          icon={Trash}
          iconAfter={ChevronRight}
        />
      </YStackFullW>
    </ScreenContainer>
  )
}
