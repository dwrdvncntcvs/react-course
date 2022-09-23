import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const Backdrop = () => {
  return <div className={style.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  );
};

const overlays = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, overlays)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlays)}
    </>
  );
};

export default Modal;
