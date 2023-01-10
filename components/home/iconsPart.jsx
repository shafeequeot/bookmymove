import React from 'react'
import SingleIcon from './singlIcon'

function IconParts() {
  return (
    <div className='flex gap-4 justify-center flex-wrap'>
      <SingleIcon title="Domestic Move" icon="/img/moving-truck (1).png"/>
      <SingleIcon title="International Relocations" icon="/img/cargo-ship.png"/>
      <SingleIcon title="Storage Solutions" icon="/img/Warehouse-Storage-solutions.png"/>
    </div>
  )
}

export default IconParts