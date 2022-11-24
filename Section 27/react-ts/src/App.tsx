import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const createTodo = (todo: string) => new Todo(todo);

const DUMMY_DATA: Todo[] = [
  createTodo("Learn React"),
  createTodo("React TypeScript"),
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_DATA);

  const addNewTodo = (text: string) => {
    setTodos((prev) => [...prev, createTodo(text)]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Todos todo={todos} />
      <NewTodo onAddTodo={addNewTodo} />
    </div>
  );
};

export default App;
