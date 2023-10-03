import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.length === 0 && "No Todos"}
      {props.todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            toggleDelete={props.toggleDelete}
            toggleTodo={props.toggleTodo}
          />
        );
      })}
    </ul>
  );
}
