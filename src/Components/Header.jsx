import React from 'react'

const Header = ({children}) => {
  return (
    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold">{children}</div>
  )
}

export default Header
