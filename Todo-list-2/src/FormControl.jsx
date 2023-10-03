import { useState } from "react";

export function FormControl(props) {
  const [newItem, setNewItem] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleOnSubmit} className="new-item">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
