import React from "react";
import "../FloatingDiv/floatingDiv.css";

const FloatingDiv = ({ text1, text2, img }) => {
  return (
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1} <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
