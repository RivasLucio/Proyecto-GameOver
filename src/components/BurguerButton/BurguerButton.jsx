import React from "react";
import "./BurguerButton.css";

export const BurguerButton = ({handleClick , click}) => {
  return (
    <div onClick={handleClick} className={`icon nav-icon-5 ${click ? 'open' :'' }`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
