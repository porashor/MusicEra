import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[85%] mx-auto py-3 flex flex-col items-start justify-between gap-2'>
      {children}
    </div>
  )
}

export default Container
