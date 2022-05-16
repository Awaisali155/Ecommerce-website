import React from "react";
import "../cards/Card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="s-button ">LEARN MORE</button>
    </div>
  );
};

export default Card;
