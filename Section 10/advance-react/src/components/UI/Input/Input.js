import React, { useRef, useImperativeHandle, forwardRef } from "react";
import classes from "./input.module.css";

const Input = forwardRef(
  ({ isValid, htmlFor, type, id, value, onChange, onBlur, label }, ref) => {
    const inputRef = useRef();

    const activate = () => inputRef.current.focus();

    useImperativeHandle(ref, () => ({ activate }));

    return (
      <div className={`${classes.control} ${isValid ? classes.invalid : ""}`}>
        <label htmlFor={htmlFor}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
