import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const total = useMemo(() => {
    let total = 0;
    for (let i = 0; i <= input; i++) {
      total = total + i;
    }
    return total;
  }, [input]);

  return (
    <>
      <div>
        <input
          onChange={function (e) {
            setInput(e.target.value);
          }}
        />
        <p>
          The sum from 1 to {input} is: {total}
        </p>
        <button
          onClick={function () {
            setCount(count + 1);
          }}
        >
          Counter: {count}
        </button>
      </div>
    </>
  );
}

export default App;
