import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/homepage/ServicePage'

function Home() {
  return (
    <section className='homePage'>
      <div className='bg-img'>
        <Navbar />
        <Hero />
      </div>
      <ServicePage />
    </section>
  )
}

export default Home


