import React, { useState } from "react";
import style from "./checkOut.module.css";
import { useRef } from "react";

export default function CheckOut({ onClose, onConfirm }) {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    postal_code: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const isEmpty = (value) => value.length === 0;
  const isFiveChars = (value) => value.length === 5;

  const inputFields = [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      ref: nameRef,
      isValid: inputValidity.name,
      errorMessage: "Invalid name",
    },
    {
      id: "street",
      type: "text",
      label: "Street",
      ref: streetRef,
      isValid: inputValidity.street,
      errorMessage: "Invalid street",
    },
    {
      id: "postal_code",
      type: "text",
      label: "Postal Code",
      ref: postalRef,
      isValid: inputValidity.postal_code,
      errorMessage: "Invalid postal code",
    },
    {
      id: "city",
      type: "text",
      label: "City",
      ref: cityRef,
      isValid: inputValidity.city,
      errorMessage: "Invalid city",
    },
  ];

  const isValid = (obj = {}) => {
    let valid = true;
    const dataBool = {};

    for (let key in obj) {
      dataBool[key] = true;
    }

    for (let key in dataBool) {
      if (key === "postal_code") {
        if (!isFiveChars(obj[key])) {
          valid = false;
          dataBool[key] = false;
        }
      } else {
        if (isEmpty(obj[key])) {
          valid = false;
          dataBool[key] = false;
        }
      }
    }

    return [valid, dataBool];
  };

  const confirmAction = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      postal_code: postalRef.current.value,
      city: cityRef.current.value,
    };

    const [isFormValid, dataValidity] = isValid(data);
    setInputValidity(dataValidity);

    if (!isFormValid) {
      return;
    }

    onConfirm(data);
  };

  return (
    <form onSubmit={confirmAction}>
      {inputFields.map(({ id, label, type, ref, isValid, errorMessage }) => (
        <div
          className={`${style.control} ${isValid ? "" : style.invalid}`}
          key={id}
        >
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} ref={ref} />
          {!isValid && <p>{errorMessage}</p>}
        </div>
      ))}
      <div className={`${style.actions}`}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button className={style.submit}>Confirm</button>
      </div>
    </form>
  );
}
