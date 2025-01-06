import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(async function (res) {
        const json = await res.json();
        console.log(json.response);
        setTodo(json.response);
      })
      .catch(console.log("Couldn't fetch data"));
  }, []);

  return (
    <>
      <div>
        <CreateTodo addTodo={addTodo} />
        <Todos todos={todo} />
      </div>
    </>
  );
}

export default App;
