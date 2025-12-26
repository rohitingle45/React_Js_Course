import { useRef } from "react";
import {Alert, Button} from 'react-bootstrap';
function UseRef() {
     const inputRef = useRef(null);
     const inputRefHandler = ()=>{
        inputRef.current.style.color='green';
        inputRef.current.placeholder='Enter Password';
        
     }
       return (
        <>
            <input ref={inputRef} type="text" placeholder="enter username" />
            <Button  onClick={inputRefHandler}>Focus on Input Field</Button>
            <Alert variant="danger">Danger</Alert>
            <Alert variant="primary">Primary</Alert>
            <Button variant="success">Success</Button>
        </>
       );
}
export default UseRef;