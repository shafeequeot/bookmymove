import React from 'react'
import Booking from './booking'

function Cover() {
  return (
    <div className='container m-auto flex flex-col md:flex-row md:gap-4 items-center min-h-[410px] '>
    <div className='flex flex-row md:flex-col gap-2 flex-wrap justify-center md:w-1/2'>

      {/* <div className='text-5xl md:text-6xl text-white'> BOOK YOUR </div>
      <div className='text-5xl md:text-6xl text-yellow-400'> MOVE  </div> */}
    </div>
      <div className='w-full'>
        <Booking />
      </div>
    </div>

  )
}

export default Cover