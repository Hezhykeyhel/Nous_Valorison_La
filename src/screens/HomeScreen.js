import React from 'react'
import Articles from '../components/Articles'
import HeroSection from '../components/HeroSection'
import HouseSection from '../components/Image'
import Services from '../components/Services'
import Footer from '../components/Footer'
const HomeScreen = () => {
  return (
    <div className='home'>
        <HeroSection/>
        <HouseSection/>
        <Services/>
        <Articles/>
        <Footer/>
    </div>
  )
}

export default HomeScreen