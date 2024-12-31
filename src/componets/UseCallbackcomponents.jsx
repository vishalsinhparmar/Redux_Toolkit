import React, { useCallback, useState } from 'react'
import List from './List';

function UseCallbackcomponents() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
  
    // Memoize the function
    const handleIncrement = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, []);
  
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleIncrement}>Increment</button>
        <p>Count: {count}</p>
        {/* Passing the memoized function */}
        <List handleIncrement={handleIncrement} />
      </div>
    );
}

export default UseCallbackcomponents