import React from 'react'
import Wrap from './Wrap'
import Navigation from '../Nav/Navigation'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <Wrap>{children}</Wrap>
      <Footer />
    </>
  )
}

export default Layout
