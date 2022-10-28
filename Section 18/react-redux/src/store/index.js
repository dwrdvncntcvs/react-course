import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features";

// const store = legacy_createStore(reducer);

const store = configureStore({
  reducer: {
    counterState: counterReducer,
  },
});

export default store;
