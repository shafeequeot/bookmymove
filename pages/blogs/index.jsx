import React from 'react'
import CoverImage from '../../components/global/coverImage'
import Footer from '../../components/global/footer'
import Header from '../../components/global/header'
import Titile from '../../components/global/title'
import UltimateRelocationCheckLists from './ultimateRelocation'

function Blogs() {
  return (
    <>
     <Titile title="Unpacking the Secrets of a Smooth Move: Insider Tips and Tricks " desc="Get the inside scoop on how to make your move as seamless as possible with BookMyMove.ae. From expert packing and transportation advice to helpful resources and tools. best relocation solutions in Dubai - UAE" />
            <Header />

            <CoverImage img="/img/blogs.jpg" title="Our Blogs" desc="Ease the stress of relocation with the help of BookMyMove.ae. Our expert tips, resources, and tools will guide you through every step of the moving process. Trust us to make your move as smooth and effortless as possible" />
            <div className='container m-auto'>
             <UltimateRelocationCheckLists/>
            </div>
            
            <footer >
                <Footer />
            </footer>
    </>
  )
}

export default Blogs