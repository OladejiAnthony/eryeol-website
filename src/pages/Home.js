import { Helmet } from 'react-helmet';
import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/section-home/ServicePage'
import AboutPage from '../components/section-home/AboutPage'
import ProjectPage from '../components/section-home/ProjectPage'
//import TestiPage from '../components/section-home/TestiPage'
import Footer from '../components/footer/Footer'
import FootHead from '../components/footer/FootHead'


function Home() {
  return (
    
    <section className='homePage'>
    <Helmet>
      <title>Eryeol-Inc</title>
    </Helmet>
    <Helmet>
    <meta name="Eryeol inc" content="eryeol incorporation portfolio website" />
  </Helmet>
  <Helmet>
    <meta property="og:Home" content="Eryeol Homepage" />
    <meta property="og:description" content="Description of your page" />
    <meta property="og:image" content="URL of the image you want to use" />
    <meta property="og:url" content="URL of your page" />
    <meta property="og:type" content="website" />
  </Helmet>
      <div className='bg-img'>
        <Navbar />
        <Hero />
      </div>
      <ServicePage />
      <AboutPage />
      {/* <ProjectPage /> */}
      {/* <TestiPage /> */}
      <FootHead />
      <Footer />
    </section>
  )
}

export default Home


