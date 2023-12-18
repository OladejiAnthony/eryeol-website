import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/section-home/ServicePage'
import AboutPage from '../components/section-home/AboutPage'
import ProjectPage from '../components/section-home/ProjectPage'
import TestiPage from '../components/TestiPage'
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


