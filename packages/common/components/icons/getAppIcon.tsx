import React from 'react'
import { AppleIcon, KeyIcon } from '@packages/common/components/icons'
import { IIconProps } from '@packages/common/components/icons/IIconProps'

export type IIcon = 'key' | 'apple'
interface IProps extends IIconProps {
  icon: IIcon
}
const getAppIcon: React.FC<IProps> = ({ icon, color, size }) => {
  switch (icon) {
    case 'apple':
      return <AppleIcon color={color} size={size} />

    case 'key':
      return <KeyIcon color={color} size={size} />

    default:
      return <AppleIcon color={color} size={size} />
  }
}

export default getAppIcon
