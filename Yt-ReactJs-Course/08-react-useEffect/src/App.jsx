import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [a,setA] = useState(0);
  const [b,setB] = useState(0);

  function aChange() {
    console.log('A Change');
    
  }

  
  function bChange() {
    console.log('B Change');
    
  }

  useEffect(()=>{
     aChange();
     
  },[a]);
  return (
    <center>
      <div> 
         <h1>A : {a}</h1>
         <h1>B : {b}</h1>
         <button onClick={()=>{
           setA(a+1);
         }}>Change A</button>
         <button onClick={()=>{
           setB(b-1);
         }}>Change B</button>
    </div>
    </center>  
    );
}

export default App;
