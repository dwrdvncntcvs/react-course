import { configureStore } from "@reduxjs/toolkit";
import { authReducer, counterReducer } from "../features";

// const store = legacy_createStore(reducer);

const store = configureStore({
  reducer: {
    counterState: counterReducer,
    authState: authReducer,
  },
});

export default store;
