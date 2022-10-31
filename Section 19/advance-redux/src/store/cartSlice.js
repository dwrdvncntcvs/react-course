import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        state.cartItems.push({
          id,
          name,
          price,
          quantity: 1,
          totalPrice: price,
        });

        state.totalQuantity += 1;
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice += price;
        state.totalQuantity = state.totalQuantity + 1;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      let cartItems = state.cartItems;
      const existingItem = cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity -= 1;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem } = cartSlice.actions;

export const useCartState = () => useSelector((state) => state.cartState);