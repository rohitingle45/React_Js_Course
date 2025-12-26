import { useId } from "react";

const UseId=()=> {
    const user = useId(); 
    return (
        <>   
        <label htmlFor={user+"name"}>Enter Username </label>
        <input type="text" placeholder="enter name"  id={user+"name"}/>
        <br />
        <label htmlFor={user+"pwd"}>Enter Password </label>
        <input type="text" placeholder="enter name"  id={user+"pwd"}/>
        <br />
        </>
    );
}
export default UseId;