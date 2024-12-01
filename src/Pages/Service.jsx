import React from 'react'
import Container from '../Components/Container'
import { serviceDataDe } from '../Data/Data'

const Service = () => {
  return (
    <div className='my-10'>
      <Container>
        <div className='flex flex-col items-center justify-center gap-7 w-[60%] mx-auto'>
          {serviceDataDe.map((item, index)=>(
            <div className="bg-custom py-4 px-10 grid grid-cols-[2fr_3fr] gap-4 items-center justify-between rounded-2xl" key={index}>
              {/* image section  */}
              <div className="">
                <img src={item.img} alt="" />
              </div>
              {/* details section  */}
              <div className="space-y-3">
                {/* header  */}
                <div className="text-3xl font-bold ">{item.name}</div>
                {/* details  */}
                <div className=" font-thin text-lg leading-8">{item.details}</div>
                {/* button  */}
                <button className="text-xl bg-navText py-2 px-6 rounded-lg text-custom">{item.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Service