const redux = require("redux");

const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = redux.legacy_createStore(reducer);

console.log("Initial State: ", store.getState());

const counterSub = () => {
  const state = store.getState();
  console.log("New State: ", state);
};

store.subscribe(counterSub);

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
