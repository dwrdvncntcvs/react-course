import { legacy_createStore } from "redux";
import { DECREMENT, INCREMENT } from "../variables";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
