import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const App = () => {
 
  const [count,setCount] = useState(0);
  const [input,setInput] = useState();
 
  function expensiveTask(num) {
    for(let i = 1; i<=100000000; i++){}
    return num*2
  }
  const value = useMemo(()=>{
      expensiveTask(input);
  },[input]);
  
  function handleCountClick() { 
    setCount(count+1);
  }
  return (
    <div>
        <h1>UseMemo Hook in React Js</h1>
        <button onClick={handleCountClick}>COUNT-{count}</button>
        <h4>{value}</h4>
        <input type="number" placeholder='enter number' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
  )
}

export default App
