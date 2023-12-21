import React, { useRef, useState } from "react";
import "./ProjectCarousel.scss"
import ProjectSlide from "./ProjectSlide";
import it from "../../../image/laptop.svg"
import ui from "../../../image/ui.svg"
import dm from "../../../image/digi.svg"
import da from "../../../image/laptop.svg"
import md from "../../../image/phone.svg"
import hd from "../../../image/robot.svg"
import sd from "../../../image/phone.svg"
import iot from "../../../image/robot.svg"


const ProjectCarousel = () => {
  const [touched, setTouched] = useState('');
  const galleryRef = useRef();
  const onMainTouchStart = () => {
    setTouched('touched');
  }
  
  return (
    <div className="project-carousel">
      <main onTouchStart={onMainTouchStart} className={`carousel ${touched}`}>
        
        <div ref={galleryRef} role="region" aria-labelledby="project-gallery-label" tabIndex="0" aria-describedby="focus">    
            <ul>
              <ProjectSlide service="IT Consultant" src={it} />
              <ProjectSlide service="Data Analysis" src={da} />
              <ProjectSlide service="Software Development" src={sd} />
              <ProjectSlide service="Mobile Develoment" src={md} />
              <ProjectSlide service="UI/UX Design" src={ui} />
              <ProjectSlide service="IoT" src={iot} />
              <ProjectSlide service="Hardware Development" src={hd} />
              <ProjectSlide service="Digital Marketing" src={dm} />
            </ul>
        </div>   
      </main>
      
    </div>
  );



}

export default ProjectCarousel;
