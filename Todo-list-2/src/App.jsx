import { useState } from "react";
import "./style.css";
import { FormControl } from "./FormControl";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }

        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <FormControl onSubmit={addTodo} />
      <h1 className="header">Todo-list</h1>
      <TodoList
        toggleDelete={toggleDelete}
        toggleTodo={toggleTodo}
        todos={todos}
      />
    </>
  );
}
