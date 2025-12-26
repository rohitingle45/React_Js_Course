import React, { useActionState } from 'react'

const App = () => {

  const handleLogin = (preData,formData) => {
     const name = formData.get('uname');
     const password = formData.get('upwd');
    let regex = /^[A-Z0-9]+$/i;

    if(name.length>5) {
      return {error:'Maximum limit is 5.....'}
    }
    else if(!regex.test(password)) {
      return {error:'Only numbers and alphabet are allows.....'}
    } 
    else {
      return {message:'Login Successfull.....'}
    }
  }

 const [data,action,pending] = useActionState(handleLogin);

  return (
    <div>
         <form action={action}>
           <input type="text" name='uname' placeholder='enter name' />
           <br /><br />
           <input type="text" name='upwd' placeholder='enter password' />
           <br /><br />
           <button>Login</button>
         </form>
    </div>
  )
}

export default App
