import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import hero from './Components/Hero'
import Hero from './Components/Hero'
import Products from './Components/Product'
import HowToUse from './Components/Howtouse'
import Benefits from './Components/Benefits'
import Minerals from './Components/Minrals_composition'
import WhyChoose from './Components/Whychooseus'
import Wholesale from './Components/Wholesale'
import Footer from './Components/footer'
import Certifications from './Components/Certificate'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
    <Hero/>
    <Products/>
    <HowToUse/>
    <Benefits/>
    <Minerals/>
    <WhyChoose/>
    <Certifications/>
    <Wholesale/>
    <Footer/>
    </div>
  )
}

export default App