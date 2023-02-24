import Link from 'next/link'
import React from 'react'
const FaqList = ['Help', 'My Page']
type Props = {
  color: string
  link: string
}
const FaqListWrap = ({ color, link }: Props) => {
  return (
    <>
      <div className="">
        {FaqList.map((text, index) => (
          <ul key={index} color={color}>
            <li>
              <Link href={link}>{text}</Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}
const Footer = () => {
  return (
    <>
      <footer className=""></footer>
    </>
  )
}

export default Footer
