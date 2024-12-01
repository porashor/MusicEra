import React from 'react'
import Container from './Container'
import Header from './Header'
import { serviceData } from '../Data/Data'

const OurService = () => {
  return (
    <div className='my-5'>
      <Container>
        {/* header section  */}
        <Header> Our Service</Header>
        {/* main section  */}
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center gap-[5rem] my-4'>{serviceData.map((item, index)=>(
            <div className='w-[200px]' key={index}>
                <div className='w-full aspect-square bg-custom rounded-full flex items-center justify-center my-6'>
                    <img className='w-[90px]' src={item.icon} alt="" />
                </div>
                <h1 className='text-center text-2xl'>{item.name}</h1>
            </div>
        ))}</div>
      </Container>
    </div>
  )
}

export default OurService
