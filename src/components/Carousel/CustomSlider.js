import React from 'react';
import Slider from 'infinite-react-carousel';

function CustomSlider() {
  const settings =  {
    arrows: true,
    arrowsScroll: 6,
    duration: 100,
    initialSlide: true,
    shift: 10,
    slidesToShow: 3
  };

  return (
    <div>
      <span>CustomSlider</span>
      <Slider { ...settings }>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CustomSlider


    
