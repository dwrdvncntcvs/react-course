import { useReducer } from "react";

const SET_VALUE = "setValue";
const SET_TOUCHED = "setTouched";

const initialValue = {
  value: "",
  isTouched: false,
};

const valueReducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.payload };
    case SET_TOUCHED:
      return { ...state, isTouched: action.payload };
    default:
      return state;
  }
};

const useInput = (name, validate) => {
  const [state, dispatch] = useReducer(valueReducer, initialValue);

  const valueIsValid = validate(state.value);
  const valueIsNotValid = !valueIsValid && state.isTouched;

  const changeHandler = (e) => {
    dispatch({ type: SET_VALUE, payload: e.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: SET_TOUCHED, payload: true });
  };

  const touchHandler = (isTouched) => {
    dispatch({ type: SET_TOUCHED, payload: isTouched });
  };

  return {
    [name]: state.value,
    [`${name}Reset`]: touchHandler,
    [`${name}ChangeHandler`]: changeHandler,
    [`${name}BlurHandler`]: blurHandler,
    [`${name}IsValid`]: valueIsValid,
    [`${name}IsNotValid`]: valueIsNotValid,
  };
};

export default useInput;
