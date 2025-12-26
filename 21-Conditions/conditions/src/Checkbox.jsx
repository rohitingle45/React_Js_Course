import { useState } from "react";

function Checkbox() {
    const [skills,setSkills] = useState([]);
    const handleSkills = (event)=>{
        setSkills(event.target.value);
        if(event.target.checked) {
            setSkills([...skills,event.target.value]);
        }
        else {
             setSkills([...skills.filter((item)=> item !== event.target.value)]);
        }
    }
    return (
        <>
             <input type="checkbox" id="JS" value="JavaScript"  onChange={handleSkills}/>
             <label htmlFor="JS">JavaScript</label>
              <br /><br />
             <input type="checkbox" id="React Js" value="React Js" onChange={handleSkills}/>
             <label htmlFor="React Js">React Js</label>
              <br /><br />
              <input type="checkbox" id="Node Js" value="Node Js" onChange={handleSkills}/>
             <label htmlFor="Node Js">Node Js</label>

             <h2>{skills.toString()}</h2>
        </>
    );
}
export default Checkbox;