import { useState } from 'react';
import './App.css';
import Counter from './counter';
function App() {
  const [currentVal, newVal] = useState();
  const onChange = (e)=>{
        newVal(e.target.value);
  }
  return <>
        <center class="centerclass">
            <p>SoftWare Engineer : {currentVal}</p>
            <input type="text" value={currentVal} onChange={onChange}/>
            <Counter/>
        </center>

        
  </>
}
export default App;
