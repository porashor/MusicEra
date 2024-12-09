import React from 'react'
import Container from '../Components/Container'
import { portfolioData } from '../Data/Data'

const Portfolio = () => (
  <div className='my-10'>
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-[50px]">
        {portfolioData.map((item, index)=>(
          <div className="bg-custom py-5 px-7 rounded-lg text-center" key={index}>
            {/* header  */}
            <div className="text-3xl font-bold py-3">{item.name}</div>
            {/* image   */}
            <img src={item.img} alt="" />
            {/* button  */}
            <div className='text-xl py-3 my-3 px-10 bg-navText rounded-lg text-custom'>{item.btn}</div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default Portfolio