import React from 'react'
import { FaWhatsapp, FaPhoneVolume, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn } from "react-icons/fa";
function Topbar() {
  return (

    <div className=" bg-masterLight-500  h-6 shadow-lg hidden md:flex flex-row items-center">
      <div className='container mx-auto flex flex-row justify-between items-center '>
        <div className='flex flex-row space-x-4 items-center '>
     

          <div className='flex flex-row items-center gap-1'>
          <FaWhatsapp className='text-lg' color="white" />
            <FaPhoneVolume className='text-sm' color="white " />
            <span className='text-sm antialiased text-white'>600 55 32 35</span>
          </div>

          <div className='flex flex-row items-center gap-1'>
            <FaEnvelope className='text-sm' color="white" />
            <span className='text-sm antialiased text-white'>info@bookmymove.ae</span>
          </div>

        </div>
        <div className='flex flex-row space-x-1 items-center gap-1'>
          <p><FaFacebookF className='text-sm' color="white" /></p>
          <p ><FaInstagram className='text-sm' color="white" /></p>
          <p ><FaTwitter className='text-sm' color="white" /></p>
          <p ><FaLinkedinIn className='text-sm' color="white" /></p>
        </div>
      </div>
    </div>
  )
}

export default Topbar