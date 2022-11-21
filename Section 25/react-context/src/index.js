import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import { ProductProvider } from "./contexts/product-context";
import configureStore from "./hooks/product-store";

configureStore();

ReactDOM.render(
  // <ProductProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductProvider>,
  document.getElementById("root")
);
