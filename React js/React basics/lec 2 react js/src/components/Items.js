import React from "react";
import "./Items.css";
import Section from "./ItemSections";

const Items = (props) => {
  return (
    <div className="headerParent">
      <Section
        title={props.details[0].title}
        price={props.details[0].price}
        date={props.details[0].date}
      />
      <Section
        title={props.details[1].title}
        price={props.details[1].price}
        date={props.details[1].date}
      />
      <Section
        title={props.details[2].title}
        price={props.details[2].price}
        date={props.details[2].date}
      />
      <Section
        title={props.details[3].title}
        price={props.details[3].price}
        date={props.details[3].date}
      />
    </div>
  );
};

export default Items;
