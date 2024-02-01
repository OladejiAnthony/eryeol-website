import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/section-home/ServicePage'
import AboutPage from '../components/section-home/AboutPage'
//import ProjectPage from '../components/section-home/ProjectPage'
//import TestiPage from '../components/section-home/TestiPage'
import Footer from '../components/footer/Footer'
import FootHead from '../components/footer/FootHead'
import { Helmet } from 'react-helmet'


function Home() {
  const ogData = {
    title: 'Eryeol Incorporation',
    description: 'This is Eryeol Incorporation official website. We serve you with everything technology.',
    url: 'https://www.eryeol.com',
    siteName: 'Eryeol',
  };
  

  return (
    
    <section className='homePage'>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={ogData.title} />
        <meta property="og:description" content={ogData.description} />
        <meta property="og:url" content={ogData.url} />
        <meta property="og:site_name" content={ogData.siteName} />
        <meta name="description" content={ogData.description} />
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


