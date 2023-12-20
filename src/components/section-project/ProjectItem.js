
import React from "react";
import arrow from "../../image/arrow-right.svg"
import "./ProjectItem.scss"

// React Component to display individual item
const ProjectItem = ({ name, category, src }) => (

  
  <div className="item-container">
    <img src={src} alt="img" />
    <div className="category">   
      {category}
    </div>
    <div>
      <div className="name">   
        {name}
      </div>
      <img src={arrow} alt="" />
    </div>
    
  </div>
);

export default ProjectItem;