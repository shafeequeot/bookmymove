import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppIcon() {
  return (
   <Link target={"_blank"} rel="noopener noreferrer"  href="https://wa.me/971600553235"><div className='cursor-pointer left-8 bottom-8 fixed w-16 h-16 bg-white rounded-full shadow-lg flex justify-center items-center'><FaWhatsapp size={50} color='green'/></div></Link>
  )
}

export default WhatsAppIcon