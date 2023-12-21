import React, { useRef, useState } from "react";
import "./TestiCarousel.scss"
import TestiSlide from "./TestiSlide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import icon from "../../../image/african-man.png"

const Buttons = ({label, fontIcon, ariaButton, onEvent}) => {
  return (
    <div className="button-section">
      <button onClick={onEvent} className={label} aria-pressed={ariaButton} type="button">{fontIcon}{label}{fontIcon}</button>
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
                name="Alfron Copeman"
                position="CEO, OpenAI"
                src={icon} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Alfron Copeman"
                position="CEO, OpenAI"
                src={icon} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
              <TestiSlide 
                name="Alfron Copeman"
                position="CEO, OpenAI"
                src={icon} 
                description="We are a one stop technology and innovation agency. With years of great achievements and delivering quality products and services to our ambitious clients"              
              />
             
 

            </ul>
        </div>
       
        
      </main>
      
    </div>
  );



}

export default TestiCarousel;
