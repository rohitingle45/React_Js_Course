import React, { useState } from 'react'

const App = () => {
  
  const [nameErr,setNameErr] = useState();
  const [passErr,setPassErr] = useState();


  const handleName = (event) => {
     const uname = event.target.value;
     if(uname.length>5) {
      setNameErr('maximum count is 5.....');
     }
     else {
       setNameErr('');
     }
  }

  const handlePassword = (event) => {
     const pwd = event.target.value;
     let regex = /^[A-Z0-9]+$/i;
     if(regex.test(pwd)) {
      setPassErr('');
     }
     else {
       setPassErr('only numbers and alphabet allows.....');
     }
  }

  
  return (
    <div>
          <input type="text" className={nameErr?'error':''} onChange={handleName} placeholder='enter name' />
          <span className='redcol'>{nameErr && nameErr}</span>
          <br /><br />
          <input type="text" className={passErr?'error':''} placeholder='enter password' onChange={handlePassword} />
           <span className='redcol'>{passErr && passErr}</span>
          <br /><br />
          <button disabled={nameErr || passErr}>Login</button>
    </div>
  )
}

export default App

