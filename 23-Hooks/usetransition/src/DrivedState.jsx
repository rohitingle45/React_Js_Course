import { useState } from "react";

function DrivedState() {
    const [users,setUsers] = useState([]);
    const [user,setUser] = useState('');
    const handleAddUser=()=> {
        setUsers([...users,user]);
    }
    const totalUser = users.length;
    const lastUser = users[totalUser-1];
    const uniqueUser = [...new Set(users)].length;
    return (
        <>    
            
            <h2>Total User :{totalUser}</h2>
            <h2>Unique User : {uniqueUser} </h2>
            <h2>Last User :{lastUser}</h2>
            <br /><br />
            <input type="text" onChange={(event)=> setUser(event.target.value)} placeholder="add user" />
            <button onClick={handleAddUser} >ADD</button>
            {
                users.map((item,i)=>{
                  return <h4 key={i}>{item}</h4>
                })
            }
        </>
    );
}
export default DrivedState;