import React from 'react'
import logo from "../assets/Logo-favicon.png"
import { navberLinks } from '../Data/Data'
const Navber = () => {
  return (
    <div className='bg-custom text-navText'>
        <div className='w-[90%] mx-auto my-0 flex items-center justify-between'>
            {/* logo section  */}
            <div><img src={logo} alt="" className='w-[80px]'/></div>
            {/* nav section  */}
            <ul className='my-10 text-1xl xl:text-2xl flex items-center justify-between gap-5 '>
                {navberLinks.map((item, index)=>(
                    <li key={index} className={
                    `relative `}>
                        <div className='px-2 rounded-xl active:bg-navText active:text-custom py-1 after:navAfter hover:after:scale-x-75 active:'>
                        <a href={item.links} className=''>{item.name}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navber
