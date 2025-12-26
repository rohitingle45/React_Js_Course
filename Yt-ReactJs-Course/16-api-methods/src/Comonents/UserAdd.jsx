import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UserAdd = () => {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [city,setCity] = useState('');

    // useEffect(()=>{
    // createUser();
    // },[]);

    // Post Method in API
    const createUser = async () =>{
       const url = "http://localhost:3000/users";
       let response = await fetch(url,{
         method:'Post',
         body:JSON.stringify({id,name,age,city})
       });
       response = await response.json(); 
       if(response){
            alert('Record Added');
        }
      setId('');
      setName('');
      setAge('');
      setCity('');
      
    }

  return (
    <div>
       <center>
        <h1>Add New User</h1>
       <input type="text" placeholder='Enter Id'  onChange={(e)=>{setId(e.target.value)}} value={id} />
       <br /><br />
       <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} value={name} />
       <br /><br />
       <input type="text" placeholder='Enter Age' onChange={(e)=>{setAge(e.target.value)}} value={age} />
       <br /><br />
       <input type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}} value={city}/>
       <br /><br />
       <button onClick={createUser}>Add User</button>
       </center>
    </div>
  )
}

export default UserAdd
