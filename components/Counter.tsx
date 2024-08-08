'use client';

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-bold'>{count}</p>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className='bg-blue-500 text-white px-4 py-4 mt-4'
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
