import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
const UserEdit = () => {
    const {id} = useParams();
    const url = "http://localhost:3000/users/"+id;
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [city,setCity] = useState('');
    const navigate = useNavigate();
  useEffect(()=>{
    getUserData();
  },[]);

  async function getUserData() {
        let response = await fetch(url);
        response = await response.json();
        setName(response.name);
        setAge(response.age);
        setCity(response.city);
    }
   
    async function updateUserData() {
        let response = await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,age,city})
        });
        response = await response.json();
        if(response) {
            alert('User Updated.....');
            navigate("/");
        }
    }

  return (
    <div>
       <center>
        <h1>Update User</h1><br />
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter New Name' />
       <br /><br />
       <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='Enter New Age' />
       <br /><br />
       <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder='Enter New City'/>
       <br /><br />
       <button onClick={updateUserData}>Update User</button>
       </center>
    </div>
  )
}

export default UserEdit
