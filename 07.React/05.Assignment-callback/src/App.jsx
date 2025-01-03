/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { useState, memo, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the callback function
  const handleLog = useCallback(() => {
    console.log("Logging message from child component");
  }, []); // Empty dependency array means this function will not change

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <Child onLog={handleLog} />
    </div>
  );
}

const Child = memo(({ onLog }) => {
  console.log("Child component rendered");

  return <button onClick={onLog}>Log Message</button>;
});
export default App;
