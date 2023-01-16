import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import Titile from '../components/global/title'
import AllServiceList from '../components/home/allServiceList'
import Cover from '../components/home/cover'
import FeatureIcons from '../components/home/featureIcon'
import IconParts from '../components/home/iconsPart'
import PopularServices from '../components/home/popularServices'

export default function Home() {
  return (
    <div >
    <Titile title="Get free quote and Book your moving service in Dubai - UAE | Bookmymove" desc="Moving service start with AED 600| Apartment, Villa and Office move within UAE | International Relocation service to anywhere in the world"/>
      <Header/>
      <main >
        <div className='bg-master-cover-bk bg-cover'>

        <Cover className=""/>
        <FeatureIcons/>
        </div>

        <IconParts/>

        <div className="bg-gray-200 py-2 md:py-4">
        <PopularServices />

        </div>

        <div className='bg-masterLight-500 -mb-4 py-4'>

        <AllServiceList/>
        </div>
      </main>

      <footer >
        <Footer/>
      </footer>
    </div>
  )
}
