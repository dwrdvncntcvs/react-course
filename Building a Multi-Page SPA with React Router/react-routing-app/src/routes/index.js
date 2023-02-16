import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/Root";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
    ],
  },
]);
