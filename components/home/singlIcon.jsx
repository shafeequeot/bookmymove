import Image from 'next/image'
import React from 'react'

function SingleIcon({title, icon}) {
  return (
    <div className='p-4 bg-white shadow-lg border flex flex-col min-w-[240px] border-gray-100 my-4 justify-center items-center rounded gap-3'>
        <Image src={icon} alt={title?.toString()} width={60} height={60}/>
        <div className='text-blue-600 font-medium'>{title}</div>
    </div>
  )
}

export default SingleIcon