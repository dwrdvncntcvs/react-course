import React, { FC, PropsWithChildren } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface TodoProps {
  todo: Todo[];
}

const Todos: FC<TodoProps & PropsWithChildren> = ({ todo }) => {
  return (
    <ul className={classes.todos}>
      {todo.map(({ id, text }) => (
        <TodoItem text={text} id={id} key={id} />
      ))}
    </ul>
  );
};

export default Todos;
