import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const ArrowRightIcon: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 11 19"
      strokeWidth="2"
      strokeLinecap="round"
      fill={'transparent'}
      strokeLinejoin="round"
    >
      <Path
        d="M1.5625 1.625L9.4375 9.5L1.5625 17.375"
        stroke={color}
        stroke-opacity="0.05"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default ArrowRightIcon
