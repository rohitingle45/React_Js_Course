import { useState } from "react";
import ChildA from "./ChildA";
import { useCallback } from "react";
const App = () => {
  const [add,setAdd] = useState(0);
  const [count,setCount] = useState(0);

const greet = useCallback(()=>{
  console.log('Hello, Rohit');
  
},[count]);
  return (
    <center>
        <div> 
         <h1>{add}</h1>
         <button onClick={()=>{setAdd(add+1)}}>Addition</button>
         <h1>{count}</h1>
         <button onClick={()=>{setCount(count+1)}}>Count</button>
        </div>
        <ChildA greet={greet}/>
    </center>
  )
}

export default App
