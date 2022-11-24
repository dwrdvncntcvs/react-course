import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

export const useTodo = () => {
  return useContext(TodoContext);
};
