
import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1>Current Count: {count}</h1>
      <div className="buttons">
        <Button label="Increment" onClick={increment} />
        <Button label="Decrement" onClick={decrement} />
        <Button label="Reset" onClick={reset} />
      </div>
    </div>
  );
}

export default Counter;
