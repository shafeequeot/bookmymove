import React from 'react'
import Booking from './booking'

function Cover() {
  return (
    <div className='container m-auto flex flex-col md:flex-row md:gap-4 items-center  '>
    <div>

      <div className='text-9xl text-white'> BOOK  </div>
      <div className='text-9xl text-white'> YOUR </div>
      <div className='text-9xl text-orange-400'> MOVE  </div>
    </div>
      <div className='w-full'>

        <Booking />
      </div>
    </div>

  )
}

export default Cover