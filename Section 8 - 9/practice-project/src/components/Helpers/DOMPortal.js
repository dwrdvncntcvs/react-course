import ReactDOM from "react-dom";

const DOMPortal = ({ element, elementId }) => {
  return ReactDOM.createPortal(element, document.getElementById(elementId));
};

export default DOMPortal;
