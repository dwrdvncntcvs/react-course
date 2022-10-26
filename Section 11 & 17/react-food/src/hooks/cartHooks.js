import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};
