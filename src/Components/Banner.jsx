import React from 'react'
import Image from "../assets/image3.jpg"
import Header from './Header'




const Banner = () => {
  return (
    <div className='w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-[3rem]'>
        {/* details section  */}
        <div className="space-y-5">
            {/* header section  */}
            <Header>Welcome to out New media</Header>
            {/* paragraph section  */}
            <div className="text-xl leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas minus, adipisci non magni, modi, harum ad veniam ducimus corrupti omnis! Dolorem accusamus tempora in maiores at totam suscipit libero aliquid, consectetur facilis excepturi distinctio nisi tenetur amet commodi ullam! Doloremque excepturi porro quasi! Expedita aut cupiditate amet voluptatum labore soluta esse, repellat possimus tenetur necessitatibus minus sunt incidunt error iste quas veniam odio ea at eum, maiores dolores non eaque iusto dolore? Dolores, quisquam eveniet unde sit porro et odit accusamus quod totam aliquam nam illo saepe deleniti placeat omnis error vitae non animi? Eligendi explicabo optio ad illo itaque corrupti? Recusandae accusantium quisquam corporis laboriosam enim perspiciatis fugiat eveniet exercitationem! Cum odio accusantium nam. Tempora voluptate velit perferendis.</div>
            {/* button section  */}
            <button className='text-2xl  bg-navText py-2 px-3 rounded-xl text-white'>Learn More </button>
        </div>
        {/* image section  */}
        <div className="">
            <img src={Image} className=' mx-auto my-3 rounded-lg' alt="" />
        </div>
    </div>
  )
}

export default Banner
