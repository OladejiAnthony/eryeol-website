import React, { useEffect, useMemo, useState } from "react";
import Item from "../project-test/Item";
//import "./styles.css";

//Filter list by category in React JS
export default function ProjectTest() {
  // Default Value
  var defaultSports = [
    { name: "So and so bot", category: "Software Development" },
    { name: "So and so bot", category: "IT Consulting" },
    { name: "So and so bot", category: "UI/UX Design" },
    { name: "So and so bot", category: "Mobile Development" },
    { name: "So and so bot", category: "Web Development" },
    { name: "So and so bot", category: "Data Analysis" },
    { name: "So and so bot", category: "Digital Marketing" },
    { name: "So and so bot", category: "Hardware Development" },
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
    <div className="">
      <div className="filter-container">
        {/* <div>Filter by Category:</div> */}
        <div>
          <select
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
      </div>
      <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
}