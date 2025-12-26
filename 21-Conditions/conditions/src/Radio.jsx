import { useState } from "react";

function Radio() {
    const [gender,setGender] = useState('male');
    const [city,setCity] = useState('akola');
     return (
        <>
           <input type="radio" name="gender" id="male" onChange={(event)=> setGender(event.target.value)} 
           value={'male'} checked={gender == 'male'}/>
           <label htmlFor="male">Male</label>
            <br />

           <input type="radio" name="gender" id="female" onChange={(event)=> setGender(event.target.value)} 
           value={'female'} checked={gender == 'female'}/>
           <label htmlFor="female">Female</label>
            
           <h2>Selected Gender : {gender}</h2> 

           <select onChange={(e)=> setCity(e.target.value)} defaultValue={'akola'}>
            <option value="akola">Akola</option>
            <option value="amravati">Amravati</option>
            <option value="buldhana">Buldhana</option>
           </select>

           <h2>Selected City : {city}</h2>
        </>
     );
}
export default Radio;