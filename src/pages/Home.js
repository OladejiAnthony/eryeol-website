import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/homepage/ServicePage'
import AboutPage from '../components/homepage/AboutPage'
import ProjectPage from '../components/homepage/ProjectPage'
import TestiPage from '../components/homepage/TestiPage'
import Footer from '../components/footer/Footer'
import FootHead from '../components/footer/FootHead'

function Home() {
  return (
    <section className='homePage'>
      <div className='bg-img'>
        <Navbar />
        <Hero />
      </div>
      <ServicePage />
      <AboutPage />
      <ProjectPage />
      <TestiPage />
      <FootHead />
      <Footer />
    </section>
  )
}

export default Home


