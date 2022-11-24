import React, { FC, PropsWithChildren } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface TodoProps {
  todo: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: FC<TodoProps & PropsWithChildren> = ({ todo, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {todo.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemoveItem={onRemoveTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
