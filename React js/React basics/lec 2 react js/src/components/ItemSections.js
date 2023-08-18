// importing UI updator module
import React, { useState } from "react";
import "./ItemSections.css";
import Date from "./Date";

const Section = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // UI updator, for each button
    setTitle("cracky");
  };

  return (
    <div className="Section">
      <div className="sectionChild">
        <Date date={props.date} />
        <div className="sectionTitle">
          <h2>{title}</h2>
        </div>
        {/* 1. event handler */}
        <button onClick={clickHandler} className="button">
          Click!
        </button>
      </div>
    </div>
  );
};

export default Section;
