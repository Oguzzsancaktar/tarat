import React from 'react'
import { Navbar } from '../navbar'

interface IProps {
  children: React.ReactNode
}
const PublicLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default PublicLayout
