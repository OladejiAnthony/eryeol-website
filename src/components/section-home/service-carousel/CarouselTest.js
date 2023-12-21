import React, { useRef, useState } from "react";
import "./CarouselTest.scss"
import Slide from "./Slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import icon from "../../../image/servicesvg.svg"

const Buttons = ({label, fontIcon, ariaButton, onEvent}) => {
  return (
    <div className="button-section">
      <button onClick={onEvent} className={label} aria-pressed={ariaButton} type="button">{fontIcon}{label}{fontIcon}</button>
    </div>
  );
}

const CarouselTest = () => {
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
    <div className="carousel-wrapper">
      <main onTouchStart={onMainTouchStart} className={`carousel ${touched}`}>
        <ul aria-label="gallery controls">
            <li>
              <Buttons ariaButton={ariaPressed} onEvent={onButtonPrevClick} fontIcon={faIconPrev} />
            </li>
            <li>
              <Buttons ariaButton={ariaPressed} onEvent={onButtonNextClick} fontIcon={faIconNext}  />
            </li>
        </ul>
        <div ref={galleryRef} role="region" aria-labelledby="gallery-label" tabIndex="0" aria-describedby="focus">
           
            <ul>
              <Slide service="IT Consultant" src={icon} />
              <Slide service="Data Analysis" src={icon} />
              <Slide service="Software Development" src={icon} />
              <Slide service="Mobile Develoment" src={icon} />
              <Slide service="UI/UX Design" src={icon} />
              <Slide service="IoT" src={icon} />
              <Slide service="Hardware Development" src={icon} />

            </ul>
        </div>
       
        
      </main>
      
    </div>
  );



}

export default CarouselTest;
