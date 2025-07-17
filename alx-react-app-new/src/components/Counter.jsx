import React, { useState } from 'react';

const Counter = () => {
  // Initialize state for the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Display the current count */}
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>

      {/* Increment button */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px 20px', margin: '5px', fontSize: '16px' }}
      >
        Increment
      </button>

      {/* Decrement button */}
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', margin: '5px', fontSize: '16px' }}
      >
        Decrement
      </button>

      {/* Reset button */}
      <button 
        onClick={() => setCount(0)} 
        style={{ padding: '10px 20px', margin: '5px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
