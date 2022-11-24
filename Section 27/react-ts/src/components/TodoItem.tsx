import React, { FC } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  onRemoveItem: () => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onRemoveItem: onRemove }) => {
  return (
    <li className={classes.item} onClick={onRemove}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
