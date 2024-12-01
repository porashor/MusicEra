import React from 'react'
import Header from './Header'

const Identity = ({header, img, para, order}) => {
  return (
    <div className={`grid ${order ? "grid-cols-[3fr_2fr]" : "grid-cols-[2fr_3fr]"}  items-center justify-between gap-5`}>
      {/* image section  */}
      <div className={`${order ? "order-2" : "order-1"} flex items-center my-[40px] justify-evenly `}>
        <img src={img} alt="" className='w-[400px]  aspect-square rounded-lg object-cover' />
      </div>
      {/* details section  */}
      <div className={` ${order ? "order-1" : "order-2"} space-y-[30px]`}>
        {/* header section  */}
        <Header>{header}</Header>
        {/* paragraph section  */}
        <div className='text-xl leading-8'>{para}</div>
      </div>
    </div>
  )
}

export default Identity
