import React from 'react'

const SubmitHandling = () => {
    const submitHandler = (e)=>{
       e.preventDefault();
    }
  return (
    <div>
           <form onSubmit={(e)=>{
            submitHandler(e);
           }}>
              <input type="text" placeholder='enter username' />
              <button>Submit</button>
           </form>
    </div>
  )
}

export default SubmitHandling
