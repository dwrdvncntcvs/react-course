import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Product /> },
]);
