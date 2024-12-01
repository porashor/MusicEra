import React from 'react'
import { BiMessage, BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'

const Foother = () => {
  return (
    <div className='bg-custom py-[40px] mt-3'>
      {/* main foother section  */}
      <div className='w-[30%] mx-auto grid grid-cols-4 gap-3'>
        <div className='w-[80px] aspect-square border-4 border-navText text-4xl text-navText flex items-center justify-center rounded-full hover:bg-navText hover:text-white transition-all duration-200'>
            <CgInstagram/>
        </div>
        <div className='w-[80px] aspect-square border-4 border-navText text-4xl text-navText flex items-center justify-center rounded-full hover:bg-navText hover:text-white transition-all duration-200'>
            <BsWhatsapp/>
        </div>
        <div className='w-[80px] aspect-square border-4 border-navText text-4xl text-navText flex items-center justify-center rounded-full hover:bg-navText hover:text-white transition-all duration-200'>
            <BiPhone/>
        </div>
        <div className='w-[80px] aspect-square border-4 border-navText text-4xl text-navText flex items-center justify-center rounded-full hover:bg-navText hover:text-white transition-all duration-200'>
            <BiMessage/>
        </div>
      </div>
      {/* copyright@ reserved in 2024 */}
      <div className='w-[40%] text-navText text-3xl mx-auto text-center py-4'>
      copyright@ reserved in 2024
      </div>
    </div>
  )
}

export default Foother
