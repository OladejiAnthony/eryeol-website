import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';

function Carousl() {
  
    //const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className='carousel'>
            <Carousel show={3.5} slide={3} swiping={true}>
                <div style={{
                    background: "yellow",
                    width: 300,
                    height: 300,
                    border: "30px solid white",
                    textAlign: "center",
                    lineHeight: "240px",
                    boxSizing: "border-box"
                }}></div>
                <div style={{
                    background: "yellow",
                    width: 300,
                    height: 300,
                    border: "30px solid white",
                    textAlign: "center",
                    lineHeight: "240px",
                    boxSizing: "border-box"
                }}></div>
                <div style={{
                    background: "yellow",
                    width: 300,
                    height: 300,
                    border: "30px solid white",
                    textAlign: "center",
                    lineHeight: "240px",
                    boxSizing: "border-box"
                }}></div>
                <div style={{
                    background: "yellow",
                    width: 300,
                    height: 300,
                    border: "30px solid white",
                    textAlign: "center",
                    lineHeight: "240px",
                    boxSizing: "border-box"
                }}></div>
            </Carousel>
        </div>
    );
}

export default Carousl
