import React, { FC, PropsWithChildren } from "react";
import { default as Todo } from "../models/todo";

interface TodoProps {
  todo: Todo[];
}

const Todos: FC<TodoProps & PropsWithChildren> = ({ todo }) => {
  return (
    <ul>
      {todo.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default Todos;
