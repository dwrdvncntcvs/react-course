import React from "react";
import { forwardRef } from "react";
import style from "./input.module.css";

const Input = forwardRef(({ label, id, value, input }, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
