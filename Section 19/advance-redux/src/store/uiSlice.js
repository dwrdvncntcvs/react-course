import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state, action) => {
      return { ...state, cartIsVisible: !state.cartIsVisible };
    },
    setNotification: (state, action) => {
      const { status, title, message } = action.payload;
      state.notification = { status, title, message };
    },
  },
});

export default uiSlice.reducer;

export const { toggle, setNotification } = uiSlice.actions;

export const useUIState = () => useSelector((state) => state.uiState);
