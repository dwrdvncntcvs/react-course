import { legacy_createStore } from "redux";

const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
