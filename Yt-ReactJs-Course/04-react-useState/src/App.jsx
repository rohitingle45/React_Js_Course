import React, { useState } from 'react'
import AdvanceState from './Components/advanceState';
import SubmitHandling from './Components/SubmitHandling';
import TwoWayBinding from './Components/TwoWayBinding';
const App = () => {
  const [num,setNum] = useState(0);
  function increseNum() {
     setNum(num+1);
  }
  function decreseNum() {
     setNum(num-1);
  }
  return (
    <div>
          <h2>{num}</h2>
          <button onClick={increseNum}>Increase</button>
          <button onClick={decreseNum}>Decrease</button>
          <hr />
          <AdvanceState/>
          <hr />
          <SubmitHandling/>
          <hr />
          <TwoWayBinding/>
    </div>
  )
}

export default App
