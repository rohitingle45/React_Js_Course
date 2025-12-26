import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement, reset } from './react-redux-toolkit/counterSlice';
const App = () => {

  const count = useSelector((state)=>{return state.counter.value});
  const dispatch = useDispatch();
  function handleIncBtn() {
       dispatch(increment());
  }

  function handleDecBtn() {
       dispatch(decrement());
  }

  function handleResetBtn() {
     dispatch(reset());
  }
  return (
    <div>
        <h1>React Redux ToolKit RTK </h1>
        <h2>Count is : {count} </h2>
        <button onClick={handleIncBtn}>+</button>
        <button onClick={handleDecBtn}>-</button>
        <button onClick={handleResetBtn}>Reset</button>
    </div>
  )
}

export default App
