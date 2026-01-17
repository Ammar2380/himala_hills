import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'

import Hero from './Components/Hero'
import Products from './Components/Storefront'
import HowToUse from './Components/Howtouse'
import Benefits from './Components/Benefits'
import ShilajitResin from './Components/Shilajit_risen'
import Minerals from './Components/Minrals_composition'
import WhyChoose from './Components/Whychooseus'
import Wholesale from './Components/Wholesale'
import Footer from './Components/footer'
import Certifications from './Components/Certificate'
import LogosMarquee from './Components/Logomorque'
import ReviewsMarquee from './Components/ReviewsMarquee'
import ShilajitDifference from './Components/Shilajit_diffence'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
    <Hero/>
    <LogosMarquee/>
    <ShilajitDifference/>
    <Products/>
    <ReviewsMarquee/>
    <HowToUse/>
    <Benefits/>
    <Minerals/>
    <ShilajitResin/>
    <WhyChoose/>
    <Certifications/>
    <Wholesale/>
    <Footer/>
    </div>
  )
}

export default App