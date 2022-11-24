import { createContext, FC, PropsWithChildren, useState } from "react";
import Todo from "../models/todo";

interface TodoContextData {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const initialData = {
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
};

const TodoContext = createContext<TodoContextData>(initialData);

const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
