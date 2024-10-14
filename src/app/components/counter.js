"use client"

import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div className='flex felx-col items-center justify-center min-h-screen bg-gray-100'>
        <p className='text-2x1 font-semibold mb-4'>
            You clicked <span className='text-blue-600'>{count}</span> times
        </p>
        <button onClick={() => setCount(count + 1)}
        className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
            +
        </button>

        <button onClick={() => setCount(count - 1)}
        className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
            -
        </button>
    </div>
  );
}

export default Counter