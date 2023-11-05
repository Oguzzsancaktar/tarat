import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const CakeIcon: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" />
    </Svg>
  )
}

export default CakeIcon