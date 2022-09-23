import React from "react";
import style from "./input.module.css";

const Input = ({ label, id, value, input }) => {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
