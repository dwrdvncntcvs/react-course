import React, { FC, FormEvent, useRef } from "react";
import classes from "./NewTodo.module.css";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const text = todoTextInput.current!.value;
    if (text.trim() === "") return;

    onAddTodo(text);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Add New Todo</h1>
      <label htmlFor="todoText">Todo text:</label>
      <input type="text" id="todoText" ref={todoTextInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
