/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>

      <Todo id={selectedId} />
    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (id !== 0) {
      axios.get(`https://dummyjson.com/todos/${id}`).then((response) => {
        setTodo(response.data);
        console.log(response.data.todo);
      });
    }
  }, [id]);

  return (
    <div>
      Id: {id}
      <h1 style={{ color: "white" }}>{todo.todo}</h1>
    </div>
  );
}

export default App;
