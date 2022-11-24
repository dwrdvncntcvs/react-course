import React, { FC } from "react";
import Todo from "../models/todo";

const TodoItem: FC<Todo> = ({ id, text }) => {
  return <li>{text}</li>;
};

export default TodoItem;
