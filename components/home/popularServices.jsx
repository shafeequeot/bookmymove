import React from 'react'
import Heading from '../global/heading'
import mostPopularServices from '../../pages/api/popularServices'
import Image from 'next/image'


function PopularServices() {

    return (
        <div className='container m-auto'>
            <Heading title="Most popular services" />
            <div className='flex flex-row gap-4 mb-4 flex-wrap md:flex-nowrap'>

            {
                mostPopularServices.map(service =>
                    <div key={service.label} className='flex flex-col rounded shadow-md w-full p-2 md:p-4 bg-white' >
                        <div ><Image src={service.icon} alt={service?.label?.toString()} className=' object-cover overflow-hidden' width={530} height={250} /></div>
                        <div className='w-full truncate'>{service.label}</div>
                    </div>
                )
            }
            </div>


        </div>
    )
}

export default PopularServices