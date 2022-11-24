import React from "react";
import Todo from "./components/Todo";
import { Todo as TodoInterface } from "./interfaces/todo";

const DUMMY_DATA: TodoInterface[] = [];

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <Todo todo={DUMMY_DATA} />
    </div>
  );
};

export default App;
