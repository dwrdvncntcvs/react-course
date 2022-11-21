import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";

export const useProducts = () => {
  return useContext(ProductContext);
};
