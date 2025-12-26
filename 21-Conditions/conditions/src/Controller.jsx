import { useState } from "react";

function Controller() {
    const [name,setName] = useState('');
   return (
    <>
       <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
       <h1>{name}</h1>
       <button>Submit</button>
       <button onClick={()=> setName('')}>Clear</button>
    </>
   );
}
export default Controller;