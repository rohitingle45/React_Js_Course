import { useRef } from 'react';
import './App.css';
import User from './User';
function App() {
   const inputRef = useRef();

   const handleInputRef=()=>{
      inputRef.current.style.color='green';
      inputRef.current.value=1000;
   }
   return(
    <>  
        <User ref={inputRef}/>
        <button onClick={handleInputRef}>Focus on Input box</button>
    </>
  );
}
export default App;
