import Image from 'next/image'
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

            <CoverImage img="/img/cool moving.jpg" title="About book my move services in Dubai" desc="We  proving website exclusively for Moving and Self Storage of personal effects in middle east. " />
            <div className='flex flex-col gap-4 container m-auto my-3'>
                <Image alt='cover images for book my move' src="/how_it_works.svg" width={1020} height={450}/>
                <p>

                    Bookmymove is a service proving website exclusively for Moving and Self Storage of personal effects in middle east. Our goal is to book your move online in order to avoid last moment rush and negotiations with numerous movers. We offer an easy and free service to receive quote from the professional movers.
                </p>

                <p>
                    Bookmymove.ae, your one-stop-solutions for all your moving and storage needs in the Dubai or all over United Arab Emirates. With decades of experience in the field, we understand the stress and complexities that come with relocating. That&rsquo;s why we&rsquo;ve made it our mission to provide a hassle-free, easy option to book moving and storage services.
                </p><p>
                    At Bookmymove.ae, we specialize in providing professional movers for the moving and self-storage of personal effects. Our goal is to make the booking process as simple and stress-free as possible, so you can focus on the more important aspects of your move. With our online booking service, you can avoid the last-minute rush and negotiations with multiple movers.
                    </p><p>
                    We pride ourselves on offering a free, easy service to receive quotes from professional movers. With just a few clicks, you can compare prices and services from multiple providers, ensuring you get the best deal for your move.
                    </p>
                <div>

                    bookmymove.ae <br />
                    Unit No 50 <br />
                    Leader Compound <br />
                    Dubai Investment Park <br />
                    Dubai - UAE
                </div>
                <div>
                    T: +971 600553235 <br />
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