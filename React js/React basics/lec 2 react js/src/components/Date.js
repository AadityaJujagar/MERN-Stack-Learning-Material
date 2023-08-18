import React from "react";
import "./Date.css";

const Date = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="Date">
      <div className="Date-month">{month}</div>
      <div className="Date-day">{day}</div>
      <div className="Date-year">{year}</div>
    </div>
  );
};

export default Date;
