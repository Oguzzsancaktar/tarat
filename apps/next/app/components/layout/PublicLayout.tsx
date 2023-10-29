import React from 'react'
import { Navbar } from '.'

interface IProps {
  children: React.ReactNode
}
const PublicLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
      {/* <footer>Footer</footer> */}
    </>
  )
}

export default PublicLayout
