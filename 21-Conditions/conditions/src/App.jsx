import { useState } from 'react';
import './App.css';
import Controller from './Controller';
import Checkbox from './Checkbox';
import Radio from './Radio';
function App() {
      const [count,setCount] = useState(0);
      
  return (
      <>
          <center>
                 <h2>{count}</h2>
                 <button onClick={()=> setCount(count+1)}>Counter</button>
                 {
                   count === 0 ? <h2>Count : 0</h2>
                   : count === 1 ? <h2>Count : 1</h2>
                   : count === 2 ? <h2>Count : 2</h2>
                   : <h2>Other Count</h2>
                 }
             <hr/>
             <Controller/>
             <hr/>
            <Checkbox/>
            <hr />
            <Radio/>
          </center>    
      </>
  );

}
export default App;
