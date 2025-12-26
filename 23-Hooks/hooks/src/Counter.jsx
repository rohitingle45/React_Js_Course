import { useEffect } from "react";
const Counter = ({ count }) => {

    
     const hello=()=> {
        console.log('Hello Called.......');
     }
     useEffect(()=>{
        hello();
     },[]);
     return (
        <>
            <div>
                <h2>Counter Value : {count}</h2>
            </div>
        </>
     );
}
export default Counter;