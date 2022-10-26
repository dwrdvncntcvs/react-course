import React from "react";
import style from "./card.module.css";

const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

export default Card;
