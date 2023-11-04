import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const KeyIcon: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M13.5,11c3,0,5.5-2.5,5.5-5.5S16.5,0,13.5,0S8,2.5,8,5.5c0,0.7,0.1,1.4,0.4,2.1L1,15l4,4l2.1-2.1l-1.9-1.9
       l0.9-0.9L7.9,16l2.1-2.1l-1.8-1.8l2.1-2.1C11.2,10.6,12.3,11,13.5,11z M16,4.5C16,5.3,15.3,6,14.5,6S13,5.3,13,4.5S13.7,3,14.5,3
       S16,3.7,16,4.5z"
      />
    </Svg>
  )
}

export default KeyIcon
