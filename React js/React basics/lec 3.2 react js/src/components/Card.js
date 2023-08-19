import { useState } from "react";

function Card({ id, name, info, image, price, removePlanCard }) {
  const [readMore, setReadmore] = useState(true);
  const information = readMore ? `${info.substring(0, 200)}... ` : info;

  const handleReadMore = () => {
    setReadmore(!readMore);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt=""></img>
      <div className="planInfo">
        <div className="planDetails">
          <h4 className="planPrice">₹ {price}</h4>
          <h4 className="planCity">{name}</h4>
        </div>
        <div className="planDesc">
          {information}
          <span className="readMore" onClick={handleReadMore}>
            {readMore ? `Read More` : ` Show Less`}
          </span>
        </div>
      </div>
      <button onClick={() => removePlanCard(id)} className="notInterested">
        Not Interested
      </button>
    </div>
  );
}

export default Card;
