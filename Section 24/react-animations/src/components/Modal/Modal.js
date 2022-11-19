import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = ({ show, onClose }) => {
  return (
    <Transition in={show} timeout={400} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
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
      }}
    </Transition>
  );
};

export default modal;
