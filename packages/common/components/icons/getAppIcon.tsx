import React from 'react'
import {
  AppleIcon,
  KeyIcon,
  GoogleIcon,
  FacebookIcon,
  UserIcon,
  MailIcon,
  CallIcon,
  BadgeIcon,
  CakeIcon,
  LocationIcon,
  SettingsIcon,
  HomeIcon,
  AddIcon,
  QuestionIcon,
  DarkModeIcon,
  LockIcon,
  ArrowRightIcon,
} from '@packages/common/components/icons'
import { IIconProps } from '@packages/common/components/icons/IIconProps'

export type IIcon =
  | 'key'
  | 'apple'
  | 'google'
  | 'facebook'
  | 'user'
  | 'mail'
  | 'lock'
  | 'call'
  | 'badge'
  | 'cake'
  | 'location'
  | 'settings'
  | 'home'
  | 'add'
  | 'question'
  | 'dark-mode'
  | 'arrow-right'

interface IProps extends IIconProps {
  icon: IIcon
}

const getAppIcon: React.FC<IProps> = ({ icon, color, size }) => {
  switch (icon) {
    case 'apple':
      return <AppleIcon color={color} size={size} />
    case 'arrow-right':
      return <ArrowRightIcon color={color} size={size} />
    case 'google':
      return <GoogleIcon color={color} size={size} />
    case 'facebook':
      return <FacebookIcon color={color} size={size} />
    case 'user':
      return <UserIcon color={color} size={size} />
    case 'key':
      return <KeyIcon color={color} size={size} />
    case 'mail':
      return <MailIcon color={color} size={size} />
    case 'lock':
      return <LockIcon color={color} size={size} />
    case 'call':
      return <CallIcon color={color} size={size} />
    case 'badge':
      return <BadgeIcon color={color} size={size} />
    case 'cake':
      return <CakeIcon color={color} size={size} />
    case 'location':
      return <LocationIcon color={color} size={size} />
    case 'settings':
      return <SettingsIcon color={color} size={size} />
    case 'home':
      return <HomeIcon color={color} size={size} />
    case 'add':
      return <AddIcon color={color} size={size} />
    case 'question':
      return <QuestionIcon color={color} size={size} />
    case 'dark-mode':
      return <DarkModeIcon color={color} size={size} />
    default:
      return <AppleIcon color={color} size={size} />
  }
}

export default getAppIcon
