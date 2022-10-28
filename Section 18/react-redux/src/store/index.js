import { legacy_createStore } from "redux";
import { DECREMENT, INCREMENT, SHOW_COUNTER } from "../variables";

const initialState = {
  count: 0,
  showCounter: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    case SHOW_COUNTER:
      return { ...state, showCounter: payload };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
