import React from 'react'
import "./About.scss"
import WhiteNavbar from '../components/navbar/WhiteNavbar'
import AboutHero from '../components/section-about/AboutHero'


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


