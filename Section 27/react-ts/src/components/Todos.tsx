import React, { FC, PropsWithChildren } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodoProps {
  todo: Todo[];
}

const Todos: FC<TodoProps & PropsWithChildren> = ({ todo }) => {
  return (
    <ul>
      {todo.map(({ id, text }) => (
        <TodoItem text={text} id={id} key={id} />
      ))}
    </ul>
  );
};

export default Todos;
