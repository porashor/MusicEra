import React from 'react'
import Header from "./Header"



const HelloForm = () => (
  <div className='my-10 mx-auto w-[90%] lg:w-[60%] space-y-5'>
    {/* header section  */}
    <Header>Stay in touch with us!</Header>
    {/* main section  */}
    <div className="bg-custom p-[50px] rounded-2xl ">
      {/* main form  */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-[30px]">
        {/* name  */}
        <div className="">
          <input type="text" placeholder='First Name' className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl' />
        </div>
        <div className="">
          <input type="text" placeholder='Last Name' className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl' />
        </div>
        {/* phone  */}
        <div className="">
          <input type="number" placeholder='Phone Number' className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl'/>
        </div>
        {/* email */}
        <div className="">
          <input type="email" placeholder='Email' className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl' />
        </div>
        {/* select  */}
        <div className="">
          <select name="language" id=""  className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl'>
            <option value="eng">English</option>
            <option value="ban">Bangladesh</option>
            <option value="hind">Hindi</option>
          </select>
        </div>
        {/* subject  */}
        <div>
          <input type="text" placeholder='Subject' className='w-full h-[50px] px-5 py-3 rounded-xl outline-none text-xl' />
        </div>
      </div>
      {/* text area  */}
      <div className="">
        <textarea name="" id="" placeholder='Your Message' className='w-full h-[200px] my-10 px-5 py-3 rounded-xl outline-none text-xl'></textarea>
      </div>
      {/* btn area  */}
      <div className='flex justify-center'><button className="bg-navText text-custom py-2 px-5 text-xl rounded-xl">Submit</button></div>
    </div>
  </div>
)

export default HelloForm
