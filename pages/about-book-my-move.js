import React from 'react'
import CoverImage from '../components/global/coverImage'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import Titile from '../components/global/title'

function AboutUs() {
    return (
        <>
            <Titile title="About the booking move services" desc="know more about booking app for moving and storage services in Dubai" />
            <Header />

            <CoverImage img="/img/cool moving.jpg" title="About book my move services in Dubai" desc="We  proving website exclusively for Moving and Self Storage of personal effects in middle east. "/>
            <div className='flex flex-col gap-4 container m-auto my-3'>
            <span>
        
                Bookmymove is a service proving website exclusively for Moving and Self Storage of personal effects in middle east. Our goal is to book your move online in order to avoid last moment rush and negotiations with numerous movers. We offer an easy and free service to receive quote from the professional movers.
            </span>
            <div>

                bookmymove.ae <br/>
                Unit No 50 <br/>
                Leader Compound <br/>
                Dubai Investment Park <br/>
                Dubai - UAE
            </div>
            <div>
                T: +971 600553235 <br/>
                E: info@bookmymove.ae

            </div>

                If you have any questions or remarks, feel free to contact us.
            </div>

            <footer >
                <Footer />
            </footer>
        </>
    )
}

export default AboutUs