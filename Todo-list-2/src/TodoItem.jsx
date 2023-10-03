export function TodoItem(props) {
  return (
    <li key={props.id}>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={(e) => props.toggleTodo(props.id, e.checked)}
        />
        {props.title}
      </label>
      <button
        className="btn btn-danger"
        onClick={(e) => props.toggleDelete(props.id)}
      >
        Delete
      </button>
    </li>
  );
}
