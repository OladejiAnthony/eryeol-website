import React from 'react'
import "./Project.scss"
import BlackNavbar from "../components/navbar/BlackNavbar"
import ProjectHero from '../components/section-project/ProjectHero'
//import ProjectTest from '../components/section-project/project-test/ProjectTest'
import Projects from '../components/section-project/Projects'
import FootHead from "../components/footer/FootHead"
import Footer from  "../components/footer/Footer" 

function Project() {
  return (
    <div className='project-page'>
      <div className='bg-img'>
        <BlackNavbar />
        <ProjectHero />
        <Projects />
        <FootHead />
        <Footer />
      </div>
      
      
      {/* <ProjectTest /> */}
      
      {/* <FootHead /> */}
    </div>
  )
}

export default Project
