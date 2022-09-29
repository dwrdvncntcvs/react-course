import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={style.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  );
};

const overlays = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlays)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlays)}
    </>
  );
};

export default Modal;
