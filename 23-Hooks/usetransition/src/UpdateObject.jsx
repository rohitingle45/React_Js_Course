import { useState } from "react";

function UpdateObject() {
    const[data,setData] =useState({
        name : 'Rohit',
        address : {
            city : 'Akola',
            state : 'MH',
            country : 'INDIA'
        }
    });

    const handleName = (name) =>{
          data.name=name;
          setData({...data});
          
    }

    const handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}});
    }
    return (
        <>   
            <h2>Name is : {data.name}</h2>
            <h2>City is : {data.address.city}</h2>
            <hr />
             <input type="text" placeholder="enter name" onChange={(event)=>handleName(event.target.value)} />
             <input type="text" placeholder="enter city" onChange={(event)=>handleCity(event.target.value)} />
        </>
    );
}
export default UpdateObject;