import dynamic from 'next/dynamic'
import React from 'react'

interface IProps {
  children: React.ReactNode
}

const Navbar = dynamic(() => import('./navbar/Navbar'), {
  ssr: false,
})

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
