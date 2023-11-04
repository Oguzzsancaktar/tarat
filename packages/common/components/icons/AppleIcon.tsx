import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const AppleIcon: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 23"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M13.8,16.4c-0.8,0.7-1.6,0.6-2.4,0.3c-0.8-0.4-1.6-0.4-2.5,0c-1.1,0.5-1.7,0.3-2.4-0.3C2.7,12.5,3.3,6.6,7.6,6.3
			C8.7,6.4,9.4,6.9,10,7c0.9-0.2,1.8-0.7,2.8-0.7c1.2,0.1,2.1,0.6,2.6,1.4c-2.4,1.5-1.8,4.7,0.4,5.5C15.4,14.4,14.8,15.6,13.8,16.4
			L13.8,16.4z M9.9,6.3C9.8,4.6,11.2,3.1,12.8,3C13.1,5,11,6.5,9.9,6.3z"
      />
    </Svg>
  )
}

export default AppleIcon
