import React, { useState } from 'react'
import logo from "../assets/Logo-favicon.png"
import { navberLinks } from '../Data/Data'
import { BiX } from 'react-icons/bi';
import { CgMenu } from 'react-icons/cg';
const Navber = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className='bg-custom text-navText'>
        <div className='w-[90%] mx-auto my-0 flex items-center justify-between'>
            {/* logo section  */}
            <div><img src={logo} alt="" className='w-[80px]'/></div>
            {/* nav section  */}
            <ul className='hidden my-10 text-1xl xl:text-2xl lg:flex items-center justify-between gap-5 '>
                {navberLinks.map((item, index)=>(
                    <li key={index} className={
                    `relative `}>
                        <div className='px-2 rounded-xl active:bg-navText active:text-custom py-1 after:navAfter hover:after:scale-x-75 active:'>
                        <a href={item.links} className=''>{item.name}</a>
                        </div>
                    </li>
                ))}
            </ul>
            {/* mobile navbar  */}
            <div className='lg:hidden text-2xl relative'>
                {nav ? <BiX onClick={()=>setNav(false)}/> : <CgMenu onClick={()=>setNav(true)}/>}
                <div className={`w-[180px] min-h-[200px] absolute top-[100px] left-[-150px] bg-black/90 rounded-xl  ${nav? "hidden" : ""}`}>
                    {/* nav text here  */}
                    <ul className={`text-xl  my-2 mx-3`}>
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
        </div>
    </div>
  )
}

export default Navber
