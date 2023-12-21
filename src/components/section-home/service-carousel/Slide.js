import React from "react";

const Slide = ({service, src}) => {
    return (
        <li>
            <img src={src} alt="icon" />
            <h3>{service}</h3>
        </li>
        
    
    );
}

export default Slide;

