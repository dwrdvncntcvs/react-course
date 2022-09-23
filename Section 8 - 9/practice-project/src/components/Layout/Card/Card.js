import React from "react";
import style from "./card.module.css";

const Card = ({ children, className = "" }) => {
  return <div className={`${style.card} ${className}`}>{children}</div>;
};

export default Card;
