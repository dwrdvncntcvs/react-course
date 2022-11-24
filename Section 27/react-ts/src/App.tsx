import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { useTodo } from "./hooks/useTodo";
import Todo from "./models/todo";

const App = () => {
  const { todos } = useTodo();

  return (
    <>
      <NewTodo />
      <Todos todo={todos} />
    </>
  );
};

export default App;
