import React, { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <pre>Count: {count}</pre>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
