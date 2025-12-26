import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData,setUserData] = useState([]);
  useEffect(()=>{
    getUserData();
  },[]);
  const getUserData = async () => {
     const url = "http://localhost:3000/users";
     let response = await fetch(url);
     response = await response.json();
    setUserData(response)
  }
  return (
    <div>
        <h1>Integrating Json server with API</h1>
        {
          userData.map((user)=>{
            return <ul key={user.id}>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.city}</li>
            </ul>
          })
        }
    </div>
  )
}

export default App
