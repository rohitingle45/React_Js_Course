import { useState } from "react";

function UpdateArray() {
    const [data,setData] = useState(['Yogesh','divya', 'Sonu']);
    const [complexdata,setComplexData] = useState([
        {name: 'pappa',age:43},
        {name:'mummy',age:40}
    ]);
   const handleUpdateName = (name)=>{
       data[data.length-1] = name;
       setData([...data]);
       
   }
   const handleUpdateAge = (age)=>{
       complexdata[complexdata.length-1].age=age;
       setComplexData([...complexdata]);
   }
    return (
        <>
           <input type="text" placeholder="update name" onChange={(e)=> handleUpdateName(e.target.value)}/>
           <br />
           <br />
           {
              data.map((item,index)=>{
                return <h2 key={index}>{item}</h2>
              })
           }
           <hr />
           <br />
           <input type="text" placeholder="update city" onChange={(e)=> handleUpdateAge(e.target.value)}/>
           {
               complexdata.map((item,index)=>{
                return <h2 key={index}>{item.name} : {item.age}</h2>
               })
           }
           <br />
           <br />
        </>
    );
}
export default UpdateArray;