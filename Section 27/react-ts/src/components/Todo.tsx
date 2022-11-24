import React, { FC, PropsWithChildren } from "react";
import { Todo as TodoInterface } from "../models/todo";

interface TodoProps {
  todo: TodoInterface[];
}

const Todo: FC<TodoProps & PropsWithChildren> = ({ todo }) => {
  return (
    <ul>
      {todo.map(({ id, value }) => (
        <li key={id}>{value}</li>
      ))}
    </ul>
  );
};

export default Todo;
