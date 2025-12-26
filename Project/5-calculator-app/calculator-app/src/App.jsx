 import { useState } from 'react';
import styles from './App.module.css';
 import Display from './Components/Display';
 import DisplayContainer from './Components/DisplayContainer';
function App() {
   let [calVal , setCalVal] = useState("");
   let onButtonClick = (buttonText) => {
      if(buttonText === 'C'){
         setCalVal("");
      }
      else if(buttonText === '='){
         const result = eval(calVal);
         setCalVal(result);
      }
      else {
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
   };
  return (
    <>
        <center>
          <div className={styles.calculator}>
            <Display displayValue = {calVal}/>
            <DisplayContainer onButtonClick = {onButtonClick} />
        </div>
        </center>
    </>
  )
}

export default App
