import React from 'react'
import "./AboutHero.scss"
import Mission from './Mission'
import Values from './Values'
import Team from './Team'
import Choose from './Choose'
import Awards from './Awards'
import WFooterHead from "../footer/WFooterHead"
import WhiteFooter from '../footer/WhiteFooter'


const AboutHero = () => {
  return (
    <div className='about-hero'>
      <div className='about-top'> 
        <button>About us</button>
        <h2>Born of Passion, Driven by Innovation.</h2>
      </div>
      <Mission />
      <Values />
      <Team />
      <Choose />
      {/* <Testimonialas /> */}
      <Awards />
      <WFooterHead />
      <WhiteFooter />
    </div>
    
  )
}

export default AboutHero


