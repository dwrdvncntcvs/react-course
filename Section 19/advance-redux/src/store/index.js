import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    uiState: uiReducer,
  },
});

export default store;
