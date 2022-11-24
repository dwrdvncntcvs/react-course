import React, { FC, PropsWithChildren } from "react";
import { useTodo } from "../hooks/useTodo";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface TodoProps {
  todo: Todo[];
}

const Todos: FC<TodoProps & PropsWithChildren> = ({ todo }) => {
  const { removeTodo } = useTodo();

  return (
    <ul className={classes.todos}>
      {todo.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemoveItem={removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
