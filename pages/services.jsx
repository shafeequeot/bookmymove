import React from 'react'
import CoverImage from '../components/global/coverImage'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import ImageCard from '../components/global/imageCard'
import Titile from '../components/global/title'

function Services() {


    const serviceList = [
        {title: "Easy Online Booking",  img: "/img/onlinebooking.jpg",
        desc: <div><p>At Bookmymove.ae&apos; we understand that planning a move can be overwhelming. That&rsquo;s why we&rsquo;ve made it easy to book your move   online. With just a few clicks, you can secure your move date and start planning your relocation.</p></div>},
        
        {title: "Free Quote and Survey",  img: "/img/freequote.jpg",
        desc: <div><p>We offer a free quote service to all our customers. Simply fill out our online form or give us a call and we&rsquo;ll provide you with a detailed quote for your move. Our team will also conduct a free survey of your property to ensure a seamless move.</p></div>},
       
        {title: "Local and International Moving",  img: "/img/intl-move.jpg",
        desc: <div><p>Whether you&rsquo;re moving within Dubai or relocating abroad, we&rsquo;ve got you covered. Our team of professional movers are experienced in both local and international moving, and can handle all aspects of your move, including:</p> - Packing and loading<br/>
        - Transportation and delivery <br/>
        - Custom clearance<br/>
        - Insurance</div>},
       
        {title: "Self-Storage Facilities",  img: "/img/storages.jpg",
        desc: <div><p>In addition to moving services, we also offer self-storage facilities for your convenience. Our state-of-the-art storage units are:</p> - Secure<br/>  - Clean<br/> - Easily accessible <p>Perfect for storing your personal effects while you&rsquo;re between homes.</p></div>},
    
    ]
    return (
        <>
            <Titile title="Simplify Your Move with Bookmymove.ae in Dubai - UAE 2023" desc="Bookmymove.ae offers a range of moving and storage services for a hassle-free relocation experience. From professional movers to online booking, we make planning your move easy. Get a free quote now." />
            <Header />

            <CoverImage img="/img/moving cover.jpg" title="Services for Hassle-Free Relocation" desc="We  proving website exclusively for Moving and Self Storage of personal effects in middle east. " />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container m-auto my-3'>

     

               {
                serviceList?.map((srv, i)=>  <ImageCard key={i} img={srv.img} title={srv.title} desc={srv.desc} />)
               }

            </div>

            <footer >
                <Footer />
            </footer>
        </>
    )
}

export default Services