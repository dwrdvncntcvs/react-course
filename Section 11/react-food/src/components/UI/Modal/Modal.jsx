import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const Backdrop = () => {
  return ReactDOM.createPortal(
    <div className={style.backdrop}></div>,
    document.getElementById("backdrop-root")
  );
};

const ModalOverlay = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>,
    document.getElementById("overlay-root")
  );
};

const Modal = ({ children, elementId }) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
