import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [title,setTitle] = useState('');
    function submitHander(e) {
        e.preventDefault();
        setTitle('');
    }
  return (
    <div>
          <form onSubmit={(e)=>{
            submitHander(e);
          }}>
            <input type="text" placeholder='enter name' value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }} />
            <button>Submit</button>
          </form>
    </div>
  )
}

export default TwoWayBinding
