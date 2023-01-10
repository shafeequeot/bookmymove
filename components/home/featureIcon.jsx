import React from 'react'
import {  MdOutlineFileDownloadDone, MdOutlinePriceChange, MdPayments } from 'react-icons/md'


function FeatureIcons() {
    return (
        <div className='bg-masterLight-500 text-white flex flex-row justify-center text-sm gap-8 p-2'>
            <div className='flex items-center gap-1 '>
                <MdPayments className='text-orange-400' size={32} />
                <span>Card payment</span>
            </div>

            <div className='flex items-center gap-1'>
                <MdOutlineFileDownloadDone className='text-orange-400' size={32} />
                <span>Payment collection after completion of all domestic move services </span>
            </div>
        
            <div className='flex items-center gap-1'>
                <MdOutlinePriceChange className='text-orange-400' size={32} />
                <span>Free quotes</span>
            </div>

        </div>
    )
}

export default FeatureIcons