import React from 'react'

type WrapProps = {
  children: React.ReactNode
}
const Wrap = ({ children }: WrapProps) => {
  return <div>{children}</div>
}

export default Wrap
