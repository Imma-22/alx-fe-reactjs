import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim()); // Pass the trimmed text back to the parent component
      setText(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on input change
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;