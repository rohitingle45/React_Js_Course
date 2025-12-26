import { useState } from "react";

const Counter=()=> {
    const [count,setCount] = useState(0);
    const [rcount,setRCount] = useState(10);

    return (
        <>
          <div>
            <p>Counter:{count}</p>
            <button onClick={()=>setCount(count+1)}>Counter++</button>
          </div>
          <div>
            <p>Counter:{rcount}</p>
            <button onClick={()=>setRCount(rcount-1)}>Counter--</button>
          </div>
        </>
    );
}
export default Counter;