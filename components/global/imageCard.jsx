import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ImageCard({img, title, desc}) {
  return (
    <div className='flex flex-col justify-between gap-2 shadow border border-gray-200 p-2 md:p-4'>
        <div>

        <Image className='h-32 md:h-40 overflow-hidden object-cover' src={img} width={350} height={120} alt={title} />
        <h2 className='uppercase'>{title}</h2>
        <p className='text-gray-700 text-sm'>{desc}</p>
        </div>
        <Link  href="/">  
        <a className='bg-masterBlue-500 text-white rounded p-2 text-center'>Book now</a> 
        </Link>
    </div>
  )
}

export default ImageCard