import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const createTodo = (todo: string) => new Todo(todo);

const DUMMY_DATA: Todo[] = [
  createTodo("Learn React"),
  createTodo("React TypeScript"),
];

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <Todos todo={DUMMY_DATA} />
    </div>
  );
};

export default App;
