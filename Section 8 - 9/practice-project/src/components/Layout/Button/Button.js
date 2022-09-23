import React from "react";
import style from "./button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={style.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
