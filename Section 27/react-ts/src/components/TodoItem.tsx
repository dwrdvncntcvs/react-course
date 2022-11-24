import React, { FC } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: FC<Todo> = ({ id, text }) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
