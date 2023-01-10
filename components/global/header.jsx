import Link from 'next/link'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import menuItem from '../../pages/api/menu'
import Topbar from './topbar'
function Header() {

    const [mobileMenu, setMobilemenu] = useState(false)


    return (

        <>
            <Topbar/>
            <nav className="sticky top-0 z-30 bg-masterBlue-500   shadow-md h-16 ">
                <div className='container mx-auto flex flex-row px-2 sm:px-4 py-2.5 justify-between items-center'>

                    <div className=' flex flex-row  w-30'>
                        <Link href='/'>
                           <a> <img className='h-12' alt='book my move logo' src='bookmymovelogo.svg' /> </a>
                        </Link>
                    </div>

                    {/* mobile menu */}

                    <button data-collapse-toggle="mobile-menu" onClick={() => setMobilemenu(true)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6   text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>

                    <div className={mobileMenu ? 'block  fixed bg-white drop-shadow-2xl inset-y-0 w-11/12 p-6' : ' hidden '}>
                        <FaTimes className='text-orenge-400 scale-150 hover:cursor-pointer ' onClick={() => setMobilemenu(false)}></FaTimes>
                        <ul className=' mt-8 space-y-1'>
                        {
                            menuItem.map((e,i)=>
                            <li key={i} onClick={() => setMobilemenu(false)} className='hover:text-orenge-400  shadow-sm p-4 hover:bg-sky-200 rounded-md '>
                            <Link href={e.href} >{e.label}</Link>
                             </li>
                            )
                        }
                        </ul>
                    </div>

                    {/* large menu */}
                    <div className=' hidden md:block w-70   '>
                        <ul className='space-x-4 text-white flex gap-4'>
                        {
                            menuItem.map((e,i)=>
                            <Link key={i}  href={e.href}>
                            <a className=' hover:text-blue-800 hover:bg-sky-200 rounded-sm p-2 '><li  className='inline'>
                            {e.label?.toString()} 
                            </li></a>
                            </Link> 
                            )
                        }
                           
                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header