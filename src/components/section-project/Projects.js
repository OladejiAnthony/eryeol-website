
import digi from "../../image/digi.svg"
import React, { useEffect, useMemo, useState } from 'react'
import "./Projects.scss"
import ProjectItem from './ProjectItem'

//import digi from "../../image/digi.svg"
import robot from "../../image/robot.svg"
import ui from "../../image/ui.svg"
import laptop from "../../image/laptop.svg"
import phone from "../../image/phone.svg"
import dig from "../../image/digi.svg"
import bot from "../../image/robot.svg"

const Projects = () => {

  var defaultSports = [
    { name: "So and so bot", category: "Software Development", src: robot },
    { name: "So and so bot", category: "IT Consulting", src: ui },
    { name: "So and so bot", category: "UI/UX Design", src: digi },
    { name: "So and so bot", category: "Mobile Development", src: phone  },
    { name: "So and so bot", category: "Web Development", src: laptop },
    { name: "So and so bot", category: "Data Analysis", src: laptop },
    { name: "So and so bot", category: "Digital Marketing", src: dig},
    { name: "So and so bot", category: "Hardware Development", src: bot },
  ];

  //states
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  return (
    <div className='projects'>
      <div className='p-wrapper'>
      <div className="filter-container">
        {/* <div>Filter by Category:</div> */}
        
          <select
            className='selectBtn'
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All projects</option>
            <option value="Software Development">Software Development</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Hardware Development">Hardware Development</option>
          </select>
        
      </div>
      <div className="project-list">
        {filteredList.map((element, index) => (
          <ProjectItem {...element} key={index}  />
        ))}
      </div>
      </div>
    </div>
  )
}


export default Projects

