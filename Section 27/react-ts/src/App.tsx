import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const createTodo = (todo: string) => new Todo(todo);

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    setTodos((prev) => [...prev, createTodo(text)]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addNewTodo} />
      <Todos todo={todos} />
    </div>
  );
};

export default App;
