import { LinearGradient } from '@tamagui/linear-gradient'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const ProfileGradientBG: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 427 252"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </Svg>
  )
}

export default ProfileGradientBG
