import { H1, H2, H3, Label, ListItem } from '@packages/ui'
import React, { useState } from 'react'
import { XStackFullW, YStackFullW } from '@packages/ui/src/components'
import { ScreenContainer } from '@packages/common/components'
import {
  CallIcon,
  DarkModeIcon,
  MailIcon,
  QuestionIcon,
  UserIcon,
} from '@packages/common/components/icons'
import { BellRing, ChevronRight, Phone } from '@tamagui/lucide-icons'
import LockIcon from '@packages/common/components/icons/LockIcon'
import { Switch } from '@packages/ui/src/components/switch'

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
    <ScreenContainer horizontalPadding={true} verticalPadding={true} showGoBackButton={true}>
      <YStackFullW style={{ height: '100%' }}>
        <ListItem
          hoverTheme
          pressTheme
          title="Hesap Ayarları"
          icon={UserIcon}
          iconAfter={ChevronRight}
        />

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title="İletişim Bilgileri"
          icon={Phone}
          iconAfter={ChevronRight}
        />

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title=" Sık Sorulan Sorular"
          icon={QuestionIcon}
          iconAfter={ChevronRight}
        />

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title=" Gizlilik Sözleşmesi"
          icon={LockIcon}
          iconAfter={ChevronRight}
        />

        <ListItem icon={BellRing} mt={'$3'}>
          <Label pr={200} minWidth={90}>
            Bildirimler
          </Label>
          <Switch backgroundColor="$orange">
            <Switch.Thumb backgroundColor="$white" animation="quick" />
          </Switch>
        </ListItem>

        <ListItem icon={DarkModeIcon} mt={'$3'}>
          <Label pr={170} minWidth={90}>
            Koyu Görünüş
          </Label>
          <Switch backgroundColor="$orange">
            <Switch.Thumb backgroundColor="$white" animation="quick" />
          </Switch>
        </ListItem>

        <ListItem icon={MailIcon} mt={'$3'}>
          <Label pr={120} minWidth={90}>
            E-posta Bilgilendirme
          </Label>
          <Switch backgroundColor="$orange">
            <Switch.Thumb backgroundColor="$white" animation="quick" />
          </Switch>
        </ListItem>

        <ListItem
          mt={'$3'}
          hoverTheme
          pressTheme
          title=" Bize Ulaşın"
          icon={Phone}
          iconAfter={ChevronRight}
        />
      </YStackFullW>
    </ScreenContainer>
  )
}
