import Counter from './Counter';
import Card from './Card';
import styled from './Card.module.css';
import UseRef from './UseRef';
import './App.css';
import { useState } from 'react';
function App() {
      const [count,setCount] = useState(0);
  return (
    <>
       
             {/* <Counter count={count}/>
             <button onClick={()=>setCount(count+1)}>Counter</button> */}
{/*              
              <div className={styled.container}>

          
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>

                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>

           
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
              </div> */}

              <UseRef/>
    </>
  );
}
export default App;
