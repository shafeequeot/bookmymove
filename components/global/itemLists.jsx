import React from 'react'
import Heading from './heading'

function ItemLists({item, title}) {
  return (
    <div>
    <span className='font-bold'>{title} </span>
    <ul className='text-xs 	'>
                    
    {
        item?.map(moveStorage => 
           <li key={moveStorage}>{moveStorage.toString()}</li>
        )
    }
    </ul>
    </div>
  )
}

export default ItemLists