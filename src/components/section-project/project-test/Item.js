import React from "react";
//import "./itemStyles.css";

// React Component to display individual item
const Item = ({ name, category }) => (
  <div className="item-container"
    style={{display: "flex",flexDirection: "column", gap: "8px", padding: "10px", border: "1px solid black"}}
  >
    <div>
      <span className="item-label" style={{fontWeight: 600, marginRight: "8px" }}    >
        Name:
      </span>
      {name}
    </div>
    <div>
      <span className="item-label" style={{fontWeight: 600, marginRight: "8px" }}    >
        Category:
      </span>
      {category}
    </div>
  </div>
);

export default Item;
