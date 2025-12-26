import React, { use } from 'react'

const App = () => {
   /*
   localStorage.setItem('user','Rohit Ingle');
   localStorage.setItem('age',23);
  const user = localStorage.getItem('user');
  localStorage.removeItem('age');
  localStorage.clear();
  */
  const user = {
     name : 'Rohit Ingle',
     age : 23,
     city : 'Akola'
  }
  // localStorage.setItem('userInfo',user);
   localStorage.setItem('userInfo',JSON.stringify(user));
  // const userInfo = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log(userInfo);
  localStorage.clear(); 
  return (
    <div>
       <h1>{userInfo.name}</h1>
       <h1>{userInfo.age}</h1>
       <h1>{userInfo.city}</h1>
    </div>
  )
}

export default App
