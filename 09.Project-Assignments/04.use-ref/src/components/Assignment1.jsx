// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

import { useEffect } from "react";
import { useRef } from "react";

export function Assignment1() {
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}