// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

import { memo, useCallback, useState } from "react";

export function Assignment2() {
  const [input, setInput] = useState("");
  const showAlert = useCallback(() => {
    alert(input);
    setInput("");
  }, [input]);
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter your text"
        onChange={(e) => setInput(e.target.value)}
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

const Alert = memo(({ showAlert }) => {
  return <button onClick={showAlert}>Show Alert</button>;
});
