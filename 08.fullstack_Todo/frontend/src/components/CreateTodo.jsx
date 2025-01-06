/* eslint-disable react/prop-types */
import { useState } from "react";

export function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and Description cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to add Todo");
      }

      const newTodo = await response.json();
      addTodo(newTodo);
      setTitle("");
      setDescription("");
      alert("Todo added successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "20px",
      }}
    >
      <input
        style={{
          fontSize: "large",
          padding: "12px",
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        style={{
          fontSize: "large",
          padding: "12px",
        }}
        value={description}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button onClick={handleAddTodo}>Add a Todo</button>
    </div>
  );
}
