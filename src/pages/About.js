import React from 'react'
import "./About.scss"
import WhiteNavbar from '../components/navbar/WhiteNavbar'
import AboutHero from '../components/section-about/AboutHero'
import WFooterHead from "../components/footer/WFooterHead"
import WhiteFooter from '../components/footer/WhiteFooter'

function About() {
  
  return (
    <div className='about-page'>
      <div className='bg-img'>
        <WhiteNavbar />
        <AboutHero />
      </div>
      
    </div>
  )
}

export default About


