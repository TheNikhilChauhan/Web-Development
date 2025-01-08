// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

import { memo, useCallback, useState } from "react";

export function Assignment1() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    return setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    return setCount(count - 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncreament={handleIncrement}
        onDecreament={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncreament, onDecreament }) => {
  return (
    <div>
      <button
        onClick={() => {
          onIncreament();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          onDecreament();
        }}
      >
        Decrease
      </button>
    </div>
  );
});
