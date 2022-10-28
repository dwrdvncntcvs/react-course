import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
    toggleCounter: (state, action) => {
      return { ...state, showCounter: action.payload };
    },
    increase: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
  },
});

export default counterSlice.reducer;

export const { decrement, increment, toggleCounter, increase } =
  counterSlice.actions;
