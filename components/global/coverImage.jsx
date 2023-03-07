import Image from 'next/image'
import React from 'react'

function CoverImage({title, desc, img}) {
  return (
    <div className=' h-64 md:h-96 overflow-hidden object-cover w-full relative flex justify-center items-end md:items-center'>
    <div className='absolute z-10 text-center  text-white bg-gradient-to-br from-masterBlue-500 to-masterLight-500   p-2 md:p-4 rounded'>
    <h1 className='text-2xl uppercase'>{title}</h1>
    <span className='text-xs'>{desc}</span>
    </div>
    <Image src={img} alt={title?.toString()}  width={2000} height={1250}/>
    </div>
  )
}

export default CoverImage