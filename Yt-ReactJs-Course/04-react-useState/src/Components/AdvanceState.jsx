import React, { useState } from 'react'

const AdvanceState = () => {
    const [user,setUser] = useState({name:'Rohit',age:23});
    function btnClicked() {
        // const newObj = {...user};
        const newObj = {...user,age:25};
        newObj.name='Rohit Ingle';
        setUser(newObj);
    }
  return (
    <div>
          <h2>{user.name} {user.age}</h2>
          <button onClick={btnClicked}>Change</button>
    </div>
  )
}

export default AdvanceState
