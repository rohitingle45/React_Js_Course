import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [userData,setUserData] = useState([]);
  useEffect(()=>{
    getData();
  });
  async function getData() {
    const url = 'https://dummyjson.com/users';
   let response =await fetch(url);
   response = await response.json();
   setUserData(response.users);
   
  }
  return (
    <div>
          <h1>Data Fetching from API</h1>
          {
            userData.map((user,idx)=>{
             return <h1 key={idx}>{user.firstName}</h1>;
            })
          }
    </div>
  )
}

export default App
