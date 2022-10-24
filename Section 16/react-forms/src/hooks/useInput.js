import { useState } from "react";

const useInput = (name, validate) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validate(value);
  const valueIsNotValid = !valueIsValid && valueTouched;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setValueTouched(true);
  };

  const touchHandler = (isTouched) => {
    setValueTouched(isTouched);
  };

  return {
    [name]: value,
    [`${name}Reset`]: touchHandler,
    [`${name}ChangeHandler`]: changeHandler,
    [`${name}BlurHandler`]: blurHandler,
    [`${name}IsValid`]: valueIsValid,
    [`${name}IsNotValid`]: valueIsNotValid,
  };
};

export default useInput;
