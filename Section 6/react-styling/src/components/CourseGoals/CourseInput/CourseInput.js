import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormContainer = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ hasError }) => (hasError ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
    background-color: ${({ hasError }) => (hasError ? "salmon" : "white")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setHasError((prev) => (prev = false));
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setHasError((prev) => (prev = true));
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormContainer hasError={hasError}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormContainer>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
