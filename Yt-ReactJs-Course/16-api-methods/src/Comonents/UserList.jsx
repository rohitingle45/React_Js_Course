import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
const UserList = () => {
    const url = "http://localhost:3000/users";
    const [userData,setUserData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        showUserList();
    },[]);

   // Get Method in API 
   async function showUserList() {
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
    }

    // Delete Method in API
    async function deleteUser(id) {
        let response = await fetch(url+'/'+id,{
            method:'delete'
        });
        if(response){
            showUserList();

            alert('Record Deleted');
        }
    }

    function editUser(id) {
        navigate("/edit/"+id);
    }

  return (
    <div>
        <center><h1>UserList</h1></center>
        <ul>
            <li style={{fontWeight:'600'}}>Id</li>
            <li style={{fontWeight:'600'}}>Name</li>
            <li style={{fontWeight:'600'}}>Age</li>
            <li style={{fontWeight:'600'}}>City</li>
            <li style={{fontWeight:'600'}}>Actions</li>
        </ul>
        {
            userData.map((user)=>{
                return <ul key={user.id}>
                    <li>
                        {user.id}
                    </li>
                    <li>
                        {user.name}
                    </li>
                    <li>
                        {user.age}
                    </li>
                    <li>
                        {user.city}
                    </li>
                    <li>
                        <button className='delete-btn' onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        <button className='edit-btn' onClick={()=>{editUser(user.id)}}>Edit</button>
                    </li>
                </ul>
            })
        }
    </div>
  )
}

export default UserList
