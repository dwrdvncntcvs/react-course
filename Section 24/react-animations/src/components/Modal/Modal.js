import React from "react";

import "./Modal.css";

const modal = ({ show, onClose }) => {
  const cssClasses = [
    "Modal",
    show === "entering"
      ? "ModalOpen"
      : show === "exiting"
      ? "ModalClose"
      : null,
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={onClose}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
