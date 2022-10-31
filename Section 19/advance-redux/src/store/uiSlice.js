import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state, action) => {
      return { ...state, cartIsVisible: !state.cartIsVisible };
    },
  },
});

export default uiSlice.reducer;

export const { toggle } = uiSlice.actions;

export const useUIState = () => useSelector((state) => state.uiState);
