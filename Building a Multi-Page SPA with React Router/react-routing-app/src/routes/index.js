import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/Root";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);
