import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const FacebookIcon: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 30 35"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M19.8879 19.014L20.4709 15.3095H16.8236V12.9066C16.8236 11.8928 17.3322 10.9041 18.9658 10.9041H20.625V7.7503C20.625 7.7503 19.1199 7.5 17.6815 7.5C14.6764 7.5 12.7141 9.27463 12.7141 12.486V15.3095H9.375V19.014H12.7141V27.9698C13.3844 28.0725 14.0702 28.125 14.7688 28.125C15.4675 28.125 16.1533 28.0725 16.8236 27.9698V19.014H19.8879Z"
        fill="#0163E0"
      />
    </Svg>
  )
}

export default FacebookIcon
