import React from "react";
import { DOMPortal } from "../../Helpers";
import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./errorModal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={style.backdrop} onClick={onClose} />;
};

const Modal = ({ title, message, onClose }) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{title}</h2>
      </header>
      <div className={style.content}>
        <p>{message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
      <DOMPortal
        element={<Backdrop onClose={onClose} />}
        elementId="backdrop-root"
      />
      <DOMPortal
        element={<Modal title={title} message={message} onClose={onClose} />}
        elementId="modal-root"
      />
    </>
  );
};

export default ErrorModal;
