import React from "react";
import "./tesa-card.css";
const TesaCard = (props) => (
  <div className="tesa-card">
    <div className="card-image">
      <img src={`/images/${props.image}`} alt={props.name} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{props.name}</h3>
      <p className="card-description">{props.description}</p>
      <span className="card-price">{props.price}</span>
    </div>
  </div>
);
export default TesaCard;