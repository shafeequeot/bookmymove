import React from 'react'
import { GoLocation } from 'react-icons/go'
import { BsTelephone, BsWhatsapp, BsEnvelopeOpen } from 'react-icons/bs'
import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'
import Link from 'next/link'
import menuItem from '../../pages/api/menu'
import service from '../../pages/api/services'
import WhatsAppIcon from './whatsappIcon'

function Footer() {
  return (

    <div className=' bg-masterBlue-500 w-full border-t-4 border-masterLight-500'>
      <div className='container m-auto flex flex-col  md:flex-row md:flex-wrap  gap-8 justify-between '>
        {/* first part */}
        <div className=''>
          <h4 className='text-masterLight-500 text-lg font-medium'>Address</h4>
          <div className='flex flex-row items-center space-x-2 border-b border-opacity-40 p-2 border-white'>
            <div><GoLocation color='white'></GoLocation></div>
            <p className='text-white text-sm'>Unit No 50, Leader Compound, Dubai Investment Park 1, Dubai - UAE</p>
          </div>

        
          <div className='flex flex-row items-center space-x-2  p-2 border-white'>
            <div><BsTelephone color='white' /></div>
            <a href='tel:+971600553235' className='text-white text-sm hover:bg-masterLight-50'>600 55 32 35</a>
          </div>

          <div className='flex flex-row items-center space-x-2 pl-2 border-white'>
            <div><BsWhatsapp color='white' /></div>
            <a href='https://wa.me/971600553235' target="_blank" rel="noopener noreferrer" className='text-white text-sm hover:text-orange-400'>600 55 32 35</a>
          </div>
          <div className='flex flex-row items-center space-x-2 p-2 border-white'>
            <div><BsEnvelopeOpen color='white' /></div>
            <a href='mailto:info@bookmymove.ae' target="_blank" rel="noopener noreferrer" className='text-white text-sm hover:text-masterLight-500'>info@bookmymove.ae</a>
          </div>

        </div>

        {/* second part */}
        <div className=''>

          <h4 className='text-masterLight-500 text-lg font-medium'>Keep Moving on</h4>
          <div className='flex flex-col  space-y-2 border-b border-opacity-40 p-2  border-white'>
          {
            menuItem.map((e,i)=>
            <Link key={i} href={e.href} >
            <a className='text-white text-sm hover:text-masterLight-500'>{e.label?.toString()}</a>
            </Link>
            )
          }
          </div>

          <h4 className='text-masterLight-500 text-lg font-medium'>Follow us on</h4>
          <div className='flex flex-row  space-x-3 '>
          <div className='cursor-pointer'> <Link target="_blank" href="https://www.facebook.com/bookmymovedubai"><RiFacebookCircleLine color='white' className='text-3xl'/></Link> </div>
          <div className='cursor-pointer'> <Link target="_blank" href="https://www.instagram.com/bookmymovedubai/"><RiInstagramLine color='white' className='text-3xl' /></Link> </div>      
          <div className='cursor-pointer'> <Link target="_blank" href="https://www.linkedin.com/company/90353719/"><RiLinkedinFill color='white' className='text-3xl' /></Link> </div>     
          <div className='cursor-pointer'> <Link target="_blank" href="https://twitter.com/Bookmymovedxb"><RiTwitterFill color='white' className='text-3xl'/></Link>  </div>  
           </div>
        </div>
        <div className=''>
          <h4 className='text-masterLight-500 text-lg font-medium'>Relocation Services</h4>
          <div className='flex flex-col  space-y-2'>
          {
            service.map((e,i)=>
            <Link key={i} href={e.href?.toString()} >
            <a className='text-white text-sm hover:text-masterLight-500'>{e.label?.toString()}</a>
            </Link>

            )
          }
          </div>
        </div>
      </div>
          <WhatsAppIcon/>
    </div>
  )
}

export default Footer