import React from "react";
import style from "./checkOut.module.css";

export default function CheckOut({ onClose }) {
  const inputFields = [
    {
      id: "name",
      type: "text",
      label: "Full Name",
    },
    {
      id: "street",
      type: "text",
      label: "Street",
    },
    {
      id: "postal_code",
      type: "text",
      label: "Postal Code",
    },
    {
      id: "city",
      type: "text",
      label: "City",
    },
  ];

  const confirmAction = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={confirmAction}>
      {inputFields.map(({ id, label, type }) => (
        <div className={style.control}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} />
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
