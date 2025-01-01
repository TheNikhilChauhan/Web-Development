/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Have to be there at 8pm",
      completed: false,
    },
    {
      title: "Office",
      description: "Have an urgent meeting at 5pm",
      completed: false,
    },
  ]);

  function addTodoHandler() {
    setTodos([
      ...todos,
      {
        title: "random todo title",
        description: "todos description",
      },
    ]);
  }

  return (
    <>
      <div>
        <h1>Todos</h1>

        <button onClick={addTodoHandler}>Add Random Todos</button>

        {todos.map(function (todo, index) {
          return (
            <Todo
              key={index}
              title={todo.title}
              description={todo.description}
            />
          );
        })}
      </div>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
