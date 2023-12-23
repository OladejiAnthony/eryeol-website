import React from 'react'
import "./ProjectA.scss"
import BlackNavbar from "../../../navbar/BlackNavbar"
import FootHead from "../../../footer/FootHead"
import Footer from "../../../footer/Footer"
import Desc from './Desc'

const ProjectA = () => {
  return (
    <div className='project-a'>
      <div className='bg-img'>
        <BlackNavbar />
        <Desc />
        {/* <ProjectHero />
            <Projects /> */}
        <FootHead />
        <Footer />
      </div>
    </div>
  )
}

export default ProjectA

