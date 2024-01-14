import React, { useRef, useState } from "react";
import "./TestiCarousel.scss"
import TestiSlide from "./TestiSlide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import icon from "../../../image/african-man.png"
import aam from "../../../image/bsam.svg"
import am from "../../../image/eyinbo.svg"
import aaw from "../../../image/blacki.svg"
import td from "../../../image/td.svg"
import todd from "../../../image/todd.svg"

const Buttons = ({label, fontIcon, ariaButton, onEvent}) => {
  return (
    <div className="button-section">
      <button onClick={onEvent} className={label} aria-pressed={ariaButton} type="button">
          {fontIcon}{label}
      </button>
    </div>
  );
}

const TestiCarousel = () => {
  const [touched, setTouched] = useState('');
  const galleryRef = useRef();
  //button hooks
  const [ariaPressed, setAriaPressed] = useState(false); 
  const [faIconNext, setFaIconNext] = useState(<FontAwesomeIcon icon={faArrowRight} />);
  const [faIconPrev, setFaIconPrev] = useState(<FontAwesomeIcon icon={faArrowLeft} />);

  const onMainTouchStart = () => {
    setTouched('touched');
  }
  //scrollnext
  const scrollNext = () => {
    galleryRef.current.scrollBy({
        top: 0,
        left: 540,
        behavior: 'smooth'
      });
  }
  //scrollprev
  const scrollPrev = () => {
    galleryRef.current.scrollBy({
        top: 0,
        left: -540,
        behavior: 'smooth'
      });
  }
  //next click
  const onButtonNextClick = () => {
    scrollNext();
    if (ariaPressed === false){
        setAriaPressed(true); 
        setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
        setTimeout(() => {
          setAriaPressed(false);
          setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
      }, 600);
      console.log("button clicked");
      
    } else {
        setAriaPressed(false);
        setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
    }
  }
  //prev click
  const onButtonPrevClick = () => {
    scrollPrev();
    if (ariaPressed === false){
      setAriaPressed(true); 
      setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
      setTimeout(() => {
      setAriaPressed(false);
      setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
    }, 600);
    console.log("button clicked");
    } else {
    setAriaPressed(false);
    setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
    }
  }

  
  return (
    <div className="testi-carousel-wrapper">
      <main onTouchStart={onMainTouchStart} className={`carousel ${touched}`}>
        <ul aria-label="testi-gallery controls">
            <li>
              <Buttons ariaButton={ariaPressed} onEvent={onButtonPrevClick} fontIcon={faIconPrev} />
            </li>
            <li>
              <Buttons ariaButton={ariaPressed} onEvent={onButtonNextClick} fontIcon={faIconNext}  />
            </li>
        </ul>
        <div ref={galleryRef} role="region" aria-labelledby="testi-gallery-label" tabIndex="0" aria-describedby="focus">
           
            <ul>
              <TestiSlide 
                name="Samson Fashola"
                position="Director Research and Development."
                src={aam} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Jessie Liu"
                position="CEO, Yiwu Sale/ Chief Marketing Director"
                src={am} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Akindele Bewaji"
                position="Procurement Manager"
                src={aaw} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Todd Ojeifo Akharaiyi"
                position="Corporate Management/Customer Relatioship Manager"
                src={todd} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Oladeji Anthony"
                position="Software Engineer"
                src={td} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
             
 

            </ul>
        </div>
       
        
      </main>
      
    </div>
  );



}

export default TestiCarousel;
